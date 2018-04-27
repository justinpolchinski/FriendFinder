//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//Express setup

var app = express();
var PORT = process.env.PORT || 3001;
// for data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });