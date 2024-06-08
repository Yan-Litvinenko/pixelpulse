const mysql = require('mysql2/promise');

class DataBase {
    constructor(objectConfig) {
        this.config = objectConfig;
    }

    async connect() {
        try {
            this.db = await mysql.createConnection(this.config);
            console.log('Database connection successful!');
        } catch (error) {
            console.error('Error connecting to database:', error);
            throw error;
        }
    }

    async getDataAdminTable(columnName) {
        try {
            const data = await this.db.query(`SELECT ${columnName} FROM admin LIMIT 1`);

            if (data.length > 0) {
                return data[0][0][columnName];
            }
            return null;
        } catch (error) {
            console.error('Request execution error:', error);
            return null;
        }
    }

    async updateDataAdminTable(columnName, value) {
        try {
            await this.db.execute(`UPDATE admin SET ${columnName} = ?`, [value]);
            return true;
        } catch (error) {
            console.error('Request execution error:', error);
            return false;
        }
    }

    async updateUserTable(ip) {
        const [rows] = await this.db.query(`SELECT COUNT(*) AS count FROM users WHERE ip_address = ?`, [ip]);
        const hasInDataBase = rows[0].count > 0;

        if (hasInDataBase) {
            const query = `UPDATE users SET login_count = login_count + 1, last_login = CURRENT_TIMESTAMP WHERE ip_address = ?`;
            await this.db.execute(query, [ip]);
        } else {
            const query = `INSERT INTO users (ip_address, login_count, last_login) VALUES (?, ?, CURRENT_TIMESTAMP)`;
            await this.db.execute(query, [ip, 1]);
        }
    }

    async getAchievements() {
        const achievements = await this.db.execute('SELECT * FROM achievements');
        return achievements[0];
    }

    async achievedLevelAchieve(level) {
        const query = 'UPDATE achievements SET status = ?, date = ? WHERE description = ? AND status = "in progress"';

        const description = `Get level ${level}`;
        const status = 'achieved';

        const dateObject = new Date();
        const year = dateObject.getFullYear();
        const month = this.getZero(dateObject.getMonth() + 1);
        const day = this.getZero(dateObject.getDate());
        const date = `${year}.${month}.${day}`;

        try {
            await this.db.execute(query, [status, date, description]);
        } catch (error) {
            console.error(error);
        }
    }

    getZero(number) {
        if (number < 10) return `0${number}`;
        return `${number}`;
    }

    levelUp(countCoins) {
        if (countCoins > 75) {
            return Math.ceil(countCoins / 75);
        }

        return 1;
    }
}

const dataBase = new DataBase({
    host: '',
    port: 3306,
    user: '',
    password: '',
    database: '',
});

module.exports = dataBase;
