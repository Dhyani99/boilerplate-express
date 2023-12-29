let express = require('express');
let app = express();

var env = require('dotenv').config();

console.log("Hello World");
let middleware = express.static(__dirname+'/public');
app.use('/public',middleware);

app.get('/', function(req, res){
    res.sendFile(__dirname+'/views/index.html');
});

app.get('/json', function(req, res){
    var response = "Hello json";
    if(process.env.MESSAGE_STYLE === "uppercase"){
        response = response.toUpperCase();
    }
    res.json({message : response});
});
































 module.exports = app;
