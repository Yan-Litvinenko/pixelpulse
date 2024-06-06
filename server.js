const http = require('http');
const express = require('express');
const path = require('path');
const cron = require('node-cron');
const dataBase = require('./srv/dataBase.js');
const usersBase = require('./srv/usersBase.js');
const {
    getLevel,
    getCoins,
    getStatusAddToday,
    addCoin,
    updateUsersStatistic,
    getAchievements,
    getServerTime,
    previewImage,
} = require('./srv/routes.js');

const app = express();
const PORT = 3000;

(async () => {
    try {
        await dataBase.connect();

        app.use(express.static(path.join(__dirname, 'dist')));

        app.get('/level', getLevel);
        app.get('/coins', getCoins);
        app.get('/status_add_today', getStatusAddToday);
        app.get('/add_coin', addCoin);
        app.get('/update_users_statistic', updateUsersStatistic);
        app.get('/getAchievements', getAchievements);
        app.get('/server-time', getServerTime);
        app.get('/preview.jpg', previewImage);

        app.get('*', (_, res) => {
            res.sendFile(path.join(__dirname, 'dist', 'index.html'));
        });

        cron.schedule('0 0 * * *', () => {
            usersBase.clear();
            console.log('Clean users');
        });

        const httpServer = http.createServer(app);

        httpServer.listen(PORT, () => {
            console.log(`HTTP Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
})();
