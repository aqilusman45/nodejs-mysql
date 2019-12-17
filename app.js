var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql');
var app = express();
var cors = require('cors')

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'admin',
    port: '3306',
    password: 'admin123',
    database: 'usman'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;
app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

require('./routes')(app)

module.exports = app;
