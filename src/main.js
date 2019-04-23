var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var app = express();

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("express server is now running");
});


/*
MongoClient.connect('mongodb://localhost:27017/firmelog_db', function(err, db) {
    if (err) {
        throw err;
    }
    db.collection('user').find().toArray(function(err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
    });
});
*/

app.get('/user', function(req, res){
    MongoClient.connect('mongodb://localhost:27017/firmelog_db', function(err, db) {
        if (err) {
            throw err;
        }
        db.collection('user').find().toArray(function(err, result) {
            if (err) {
                throw err;
            }
            res.send(result);
        });
    });
});