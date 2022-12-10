const express = require ('express');
const { json } = require('body-parser');
const { urlencoded } = require('express');
const createDoc = require('./routes/createDoc');
const getDoc = require('./routes/obtenerDoc');
const morgan = require('morgan');

const app = express();

app.use(json());
app.use(urlencoded({extended:true}));
app.use(morgan('tiny'))

app.use(createDoc);
app.use(getDoc)

module.exports = app;
