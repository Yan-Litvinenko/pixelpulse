import getZero from '@/helpers/getZero';
import { createConnection } from 'mysql2/promise';
import type { Connection, FieldPacket, RowDataPacket } from 'mysql2/promise';
import type { Achieve } from '@/interface/achievements/achievements.interface';

interface DatabaseConfig {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
}

class DataBase {
    private config: DatabaseConfig;
    private db?: Connection;
    private maxRetries: number = 5;
    private retryDelay: number = 2000;

    constructor(objectConfig: DatabaseConfig) {
        this.config = objectConfig;
    }

    private sleep(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    private async tryConnect(retries: number = this.maxRetries): Promise<void> {
        try {
            this.db = await createConnection(this.config);
            console.log('Database connection successful!');
        } catch (error) {
            if (retries === 0) {
                throw new Error('Unable to connect to the database after multiple attempts');
            }
            console.error(`Connection failed. Retrying in ${this.retryDelay / 1000} seconds...`, error);
            await this.sleep(this.retryDelay);
            await this.tryConnect(retries - 1);
        }
    }

    async connect(): Promise<void> {
        if (this.db) {
            try {
                await this.db.ping();
            } catch (error) {
                console.error('Lost connection, reconnecting:', error);
                await this.tryConnect();
            }
        } else {
            await this.tryConnect();
        }
    }

    async getStatistic(columnName: string): Promise<string | null> {
        try {
            await this.connect();
            const [rows]: [RowDataPacket[], FieldPacket[]] = await this.db!.query(
                `SELECT ${columnName} FROM admin LIMIT 1`,
            );
            if (rows.length > 0) {
                return rows[0][columnName] as string;
            }
            return null;
        } catch (error) {
            console.error('Request execution error:', error);
            return null;
        }
    }

    async updateDataAdminTable(columnName: string, value: string): Promise<boolean> {
        try {
            await this.connect();
            await this.db!.execute(`UPDATE admin SET ${columnName} = ?`, [value]);
            return true;
        } catch (error) {
            console.error('Request execution error:', error);
            return false;
        }
    }

    async getAllAchievements(): Promise<Achieve[]> {
        try {
            await this.connect();

            if (this.db) {
                const rows: [RowDataPacket[], FieldPacket[]] = await this.db.execute('SELECT * FROM achievements');
                return rows[0] as Achieve[];
            }

            console.error('Request get achievements. "this.db" === undefined');
            return [];
        } catch (error) {
            console.error('Request get achievements execution error:', error);
            return [];
        }
    }

    async achievedLevelAchieve(level: string): Promise<void> {
        try {
            await this.connect();
            const query: string =
                'UPDATE achievements SET status = ?, date = ? WHERE description = ? AND status = "in progress"';

            const description: string = `Get level ${level}`;
            const status: string = 'achieved';

            const dateObject: Date = new Date();
            const year: number = dateObject.getFullYear();
            const month: string = getZero(dateObject.getMonth() + 1);
            const day: string = getZero(dateObject.getDate());
            const date: string = `${year}.${month}.${day}`;

            await this.db!.execute(query, [status, date, description]);
        } catch (error) {
            console.error('Request execution error:', error);
        }
    }

    levelUp(countCoins: number): number {
        return countCoins > 75 ? Math.ceil(countCoins / 75) : 1;
    }
}

const dataBase: DataBase = new DataBase({
    host: process.env.NEXT_PUBLIC_DATA_BASE_HOST!,
    port: Number(process.env.NEXT_PUBLIC_DATA_BASE_PORT!),
    user: process.env.NEXT_PUBLIC_DATA_BASE_USER!,
    password: process.env.NEXT_PUBLIC_DATA_BASE_PASSWORD!,
    database: process.env.NEXT_PUBLIC_DATA_BASE_NAME!,
});

export default dataBase;
