/* global process */
var express = require("express");
var app = express();
let port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("I-Evolve... is live");
});

app.listen(port, function () {
  // console.log(`App listening on port ${port}`);
});
