const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

mongoose.connect('mongodb://localhost:27017/devcoffee', () => {
  // console.log('Connected to mongodb');
});

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

module.exports = app;
