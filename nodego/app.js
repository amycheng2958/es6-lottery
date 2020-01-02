var express = require('express');
var path = require('path');
var app = express();
const router = require('./routes/index.js');
app.use(express.static(path.join(__dirname, 'public')));
app.use(router)

module.exports = app;
