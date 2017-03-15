var express = require('express');
var app = express();
let port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello Worlds!');
});

app.listen(port, function () {
  console.log(`App listening on port ${port}`);
});
