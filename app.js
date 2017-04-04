const express = require('express');
const path = require('path');

// const webpackMiddleWare = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require('./webpack.config.js');

const app = express();
app.use(express.static('dist'));
app.use('/public', express.static('./public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT || 3050);
