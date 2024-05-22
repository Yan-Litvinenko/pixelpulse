const cron = require('node-cron');
const DataBase = require('./srv/dataBase.js');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

const ID_USERS = new Map();
const dataBase = new DataBase({
    host: 'localhost',
    user: 'root',
    password: 'ewqAg6xBAs.rDVPs',
    database: 'cv',
});

(async () => {
    try {
        await dataBase.connect();

        app.use(express.static(path.join(__dirname, 'dist')));

        app.get('/level', async (_, res) => {
            const LEVEL = await dataBase.getDataAdminTable('level');
            res.json(LEVEL);
        });

        app.get('/coins', async (_, res) => {
            const COINS = await dataBase.getDataAdminTable('coins');
            res.json(COINS);
        });

        app.get('/status_add_today', (req, res) => {
            const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
            const isPressToday = ID_USERS.has(ip);
            res.json(isPressToday);
        });

        app.get('/add_coin', async (req, res) => {
            try {
                const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

                if (!ID_USERS.has(ip)) {
                    ID_USERS.set(ip, new Date());

                    const COINS = (await dataBase.getDataAdminTable('coins')) + 1500;
                    const LEVEL = dataBase.levelUp(COINS);

                    await dataBase.updateDataAdminTable('coins', COINS);
                    await dataBase.updateDataAdminTable('level', LEVEL);

                    if (LEVEL === 20) {
                        await dataBase.achievedLevelAchieve(20);
                    }

                    if (LEVEL === 40) {
                        await dataBase.achievedLevelAchieve(40);
                    }

                    if (LEVEL === 60) {
                        await dataBase.achievedLevelAchieve(60);
                    }

                    if (LEVEL === 80) {
                        await dataBase.achievedLevelAchieve(80);
                    }

                    res.json(true);
                } else {
                    res.json(false);
                }
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });

        app.get('/update_users_statistic', async (req, res) => {
            try {
                const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
                await dataBase.updateUserTable(ip);
            } catch (error) {
                console.error('Error updating user statistics in the database:', error);
            }
        });

        app.get('/getAchievements', async (req, res) => {
            try {
                const achievements = await dataBase.getAchievements();
                res.json(achievements);
            } catch (error) {
                console.error('error getting achievements from database:', error);
            }
        });

        app.get('/server-time', (req, res) => {
            const serverTime = new Date();
            res.json(serverTime.toISOString());
        });

        app.get('*', (_, res) => {
            res.sendFile(path.join(__dirname, 'dist', 'index.html'));
        });

        cron.schedule('0 0 * * *', () => {
            ID_USERS.clear();
            console.log('Очистка пользователей увеличивших количество коинов');
        });

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Ошибка подключения к базе данных:', error);
    }
})();
