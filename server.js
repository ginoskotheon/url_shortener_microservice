var http = require('http');
var express = require("express");
var app = express();
var path = require('path');


app.set('port', (process.env.PORT || 8080));


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/new/:url', function(req, res){
    var url = req.url.slice(5);
    var result = {
        "URL": url
    }
    res.send(result);
});













app.listen(app.get('port'), function(){
    console.log('Listening on port', app.get('port'));
});