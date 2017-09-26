const express = require('express');
const path = require('path');
const searchCtrl = require('./controllers/searchController');
const productsCtrl = require('./controllers/productsController');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'front/build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'front/build', 'index.html'));
});

searchCtrl(app);
productsCtrl(app);


module.exports = app;