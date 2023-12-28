let express = require('express');
let app = express();
var obj = {"message": "Hello json"};

console.log("Hello World");
let middleware = express.static(__dirname+'/public');
app.use('/public',middleware);

app.get('/', function(req, res){
    res.sendFile(__dirname+'/views/index.html');
});

app.get('/json', function(req, res){
    res.json(obj);
});
































 module.exports = app;
