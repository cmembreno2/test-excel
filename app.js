const express = require ('express');
const { json } = require('body-parser');
const { urlencoded } = require('express');
const createDoc = require('./routes/createDoc');
const createTxt = require('./routes/createTxt');
const getDoc = require('./routes/obtenerDoc');
const getTxt = require('./routes/obtenerTxt');
const getUsers = require('./routes/getUsers');
const getProducts = require('./routes/getProducts');
const getProductId = require('./routes/getProductId');
const getUserId = require('./routes/getUserId');
const morgan = require('morgan');

const app = express();

app.use(json());
app.use(urlencoded({extended:true}));
app.use(morgan('tiny'))

app.use(createDoc);
app.use(createTxt);
app.use(getDoc);
app.use(getTxt);
app.use(getUsers);
app.use(getProducts);
app.use(getProductId);
app.use(getUserId);

module.exports = app;
