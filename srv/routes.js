const path = require('path');
const dataBase = require('./dataBase.js');
const usersBase = require('./usersBase.js');

exports.getLevel = async (req, res, next) => {
    try {
        const LEVEL = await dataBase.getDataAdminTable('level');

        res.json(LEVEL);
    } catch (error) {
        next(error);
    }
};

exports.getCoins = async (req, res, next) => {
    try {
        const COINS = await dataBase.getDataAdminTable('coins');
        res.json(COINS);
    } catch (error) {
        next(error);
    }
};

exports.getStatusAddToday = (req, res, next) => {
    try {
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        const isPressToday = usersBase.has(ip);
        res.json(isPressToday);
    } catch (error) {
        next(error);
    }
};

exports.addCoin = async (req, res, next) => {
    try {
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

        if (!usersBase.has(ip)) {
            usersBase.set(ip, new Date());

            let COINS = await dataBase.getDataAdminTable('coins');

            COINS += 5;

            const LEVEL = dataBase.levelUp(COINS);

            await dataBase.updateDataAdminTable('coins', COINS);
            await dataBase.updateDataAdminTable('level', LEVEL);

            if ([20, 40, 60, 80].includes(LEVEL)) {
                await dataBase.achievedLevelAchieve(LEVEL);
            }

            res.json({
                level: LEVEL,
                coins: COINS,
                addStatus: true,
            });

            console.log(`User ${ip} added coins`);
        } else {
            console.log(`User ${ip} was unable to add coins`);
            res.json(false);
        }
    } catch (error) {
        next(error);
    }
};

exports.getAchievements = async (req, res, next) => {
    try {
        const achievements = await dataBase.getAchievements();
        res.json(achievements);
    } catch (error) {
        next(error);
    }
};

exports.getServerTime = (req, res, next) => {
    try {
        const serverTime = new Date();
        res.json(serverTime.toISOString());
    } catch (error) {
        next(error);
    }
};

exports.previewImage = (req, res) => {
    const imagePath = path.join(__dirname, '..', 'preview.jpg');
    res.sendFile(imagePath, (err) => {
        if (err) {
            console.error('Error sending image:', err);
            res.status(500).json({
                error: 'Internal Server Error',
                message: err.message,
            });
        }
    });
};

exports.visit = (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(`User ${ip} visited site!`);
};
