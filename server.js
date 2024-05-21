const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080;

let LEVEL = 15;
let COINS = 5;
let isAddToday = false;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/level', (req, res) => {
    res.json(LEVEL);
});

app.get('/coins', (req, res) => {
    res.json(COINS);
});

app.get('/status_add_today', (req, res) => {
    res.json(isAddToday);
});

app.get('/add_coin', (req, res) => {
    try {
        COINS += 5;
        isAddToday = true;
        res.json(true);
    } catch (error) {
        res.json(false);
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
