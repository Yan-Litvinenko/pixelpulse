require('dotenv').config();
const mysql = require('mysql2/promise');

class DataBase {
    constructor(objectConfig) {
        this.config = objectConfig;
    }

    async connect() {
        if (this.db) {
            try {
                await this.db.ping();
            } catch (error) {
                console.error('Lost connection, reconnecting:', error);
                this.db = await mysql.createConnection(this.config);
            }
        } else {
            this.db = await mysql.createConnection(this.config);
            console.log('Database connection successful!');
        }
    }

    async getDataAdminTable(columnName) {
        try {
            await this.connect();
            const [rows] = await this.db.query(
                `SELECT ${columnName} FROM admin LIMIT 1`,
            );
            if (rows.length > 0) {
                return rows[0][columnName];
            }
            return null;
        } catch (error) {
            console.error('Request execution error:', error);
            return null;
        }
    }

    async updateDataAdminTable(columnName, value) {
        try {
            await this.connect();
            await this.db.execute(`UPDATE admin SET ${columnName} = ?`, [
                value,
            ]);
            return true;
        } catch (error) {
            console.error('Request execution error:', error);
            return false;
        }
    }

    async getAchievements() {
        try {
            await this.connect();
            const [rows] = await this.db.execute('SELECT * FROM achievements');
            return rows;
        } catch (error) {
            console.error('Request execution error:', error);
            return [];
        }
    }

    async achievedLevelAchieve(level) {
        try {
            await this.connect();
            const query =
                'UPDATE achievements SET status = ?, date = ? WHERE description = ? AND status = "in progress"';

            const description = `Get level ${level}`;
            const status = 'achieved';

            const dateObject = new Date();
            const year = dateObject.getFullYear();
            const month = this.getZero(dateObject.getMonth() + 1);
            const day = this.getZero(dateObject.getDate());
            const date = `${year}.${month}.${day}`;

            await this.db.execute(query, [status, date, description]);
        } catch (error) {
            console.error('Request execution error:', error);
        }
    }

    getZero(number) {
        return number < 10 ? `0${number}` : `${number}`;
    }

    levelUp(countCoins) {
        return countCoins > 75 ? Math.ceil(countCoins / 75) : 1;
    }
}

console.log(process.env.DATA_BASE_HOST);

const dataBase = new DataBase({
    host: process.env.DATA_BASE_HOST,
    port: process.env.DATA_BASE_PORT,
    user: process.env.DATA_BASE_USER,
    password: process.env.DATA_BASE_PASSWORD,
    database: process.env.DATA_BASE_NAME,
});

module.exports = dataBase;
