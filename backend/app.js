'use strict'
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 4201;
var URI = ""

mongoose.connect(URI, (err, res) => {
    err ? console.log(err) : app.listen(port, () => console.log('server running on port ' + port));
});