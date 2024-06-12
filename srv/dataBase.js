const mysql = require('mysql2/promise');

class DataBase {
    constructor(objectConfig) {
        this.config = objectConfig;
        this.pool = mysql.createPool(this.config);
    }

    async getConnection() {
        try {
            const connection = await this.pool.getConnection();
            return connection;
        } catch (error) {
            console.error('Error getting database connection:', error);
            throw error;
        }
    }

    async getDataAdminTable(columnName) {
        let connection;
        try {
            connection = await this.getConnection();
            const [rows] = await connection.query(`SELECT ${columnName} FROM admin LIMIT 1`);
            if (rows.length > 0) {
                return rows[0][columnName];
            }
            return null;
        } catch (error) {
            console.error('Request execution error:', error);
            return null;
        } finally {
            if (connection) connection.release();
        }
    }

    async updateDataAdminTable(columnName, value) {
        let connection;
        try {
            connection = await this.getConnection();
            await connection.execute(`UPDATE admin SET ${columnName} = ?`, [value]);
            return true;
        } catch (error) {
            console.error('Request execution error:', error);
            return false;
        } finally {
            if (connection) connection.release();
        }
    }

    async updateUserTable(ip) {
        let connection;
        try {
            connection = await this.getConnection();
            const [rows] = await connection.query(`SELECT COUNT(*) AS count FROM users WHERE ip_address = ?`, [ip]);
            const hasInDataBase = rows[0].count > 0;

            if (hasInDataBase) {
                const query = `UPDATE users SET login_count = login_count + 1, last_login = CURRENT_TIMESTAMP WHERE ip_address = ?`;
                await connection.execute(query, [ip]);
            } else {
                const query = `INSERT INTO users (ip_address, login_count, last_login) VALUES (?, ?, CURRENT_TIMESTAMP)`;
                await connection.execute(query, [ip, 1]);
            }
        } catch (error) {
            console.error('Request execution error:', error);
        } finally {
            if (connection) connection.release();
        }
    }

    async getAchievements() {
        let connection;
        try {
            connection = await this.getConnection();
            const [rows] = await connection.execute('SELECT * FROM achievements');
            return rows;
        } catch (error) {
            console.error('Request execution error:', error);
            return [];
        } finally {
            if (connection) connection.release();
        }
    }

    async achievedLevelAchieve(level) {
        let connection;
        try {
            connection = await this.getConnection();
            const query =
                'UPDATE achievements SET status = ?, date = ? WHERE description = ? AND status = "in progress"';

            const description = `Get level ${level}`;
            const status = 'achieved';

            const dateObject = new Date();
            const year = dateObject.getFullYear();
            const month = this.getZero(dateObject.getMonth() + 1);
            const day = this.getZero(dateObject.getDate());
            const date = `${year}.${month}.${day}`;

            await connection.execute(query, [status, date, description]);
        } catch (error) {
            console.error('Request execution error:', error);
        } finally {
            if (connection) connection.release();
        }
    }

    getZero(number) {
        return number < 10 ? `0${number}` : `${number}`;
    }

    levelUp(countCoins) {
        return countCoins > 75 ? Math.ceil(countCoins / 75) : 1;
    }
}

const dataBase = new DataBase({
    host: '',
    port: 3306,
    user: '',
    password: '',
    database: '',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = dataBase;
