var express = require('express');


var app = express();

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("express server is now running");
})