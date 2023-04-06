const express = require('express');
const compression = require('compression');
const { join } = require('path');
const router = require('./routes');
const { notFoundError, serverError } = require('./controllers');
require('env2')('.env');


const app = express();
app.set('PORT', process.env.PORT || 3000);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));
app.use(router);
// app.use(notFoundError);
app.use(serverError);


module.exports = app;
