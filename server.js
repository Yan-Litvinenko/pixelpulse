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
    getAchievements,
    getServerTime,
    previewImage,
    visit,
} = require('./srv/routes.js');

const app = express();
const PORT = 3000;

(async () => {
    try {
        await dataBase.connect();

        app.use(express.static(path.join(__dirname, 'dist')));

        app.get('/api/getLevel', getLevel);
        app.get('/api/getCoins', getCoins);
        app.get('/api/getStatusAddToday', getStatusAddToday);
        app.get('/api/getAchievements', getAchievements);
        app.get('/api/serverTime', getServerTime);
        app.get('/preview.jpg', previewImage);
        app.get('/visit', visit);
        app.post('/addCoin', addCoin);

        app.use('/api/*', (req, res) => {
            res.status(404).json({ status: '404', message: 'Error receiving data' });
        });

        app.get('*', (_, res) => {
            res.sendFile(path.join(__dirname, 'dist', 'index.html'));
        });

        cron.schedule('0 0 * * *', () => {
            usersBase.clear();
            console.log('Clean users');
        });

        app.use((err, req, res, next) => {
            console.error(err.stack);
            if (req.accepts('json')) {
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.status(500).send('Internal Server Error');
            }
        });

        const httpServer = http.createServer(app);

        httpServer.listen(PORT, () => {
            console.log(`HTTP Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
})();
