const express = require ('express');
const { json } = require('body-parser');
const { urlencoded } = require('express');
const createDoc = require('./routes/createDoc');
const createTxt = require('./routes/createTxt');
const getDoc = require('./routes/obtenerDoc');
const getTxt = require('./routes/obtenerTxt');
const morgan = require('morgan');

const app = express();

app.use(json());
app.use(urlencoded({extended:true}));
app.use(morgan('tiny'))

app.use(createDoc);
app.use(createTxt);
app.use(getDoc);
app.use(getTxt);

module.exports = app;
