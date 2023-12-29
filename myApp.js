let express = require('express');
let app = express();

var env = require('dotenv').config();

console.log("Hello World");
let middleware = express.static(__dirname+'/public');
app.use('/public',middleware);

app.get('/', function(req, res){
    res.sendFile(__dirname+'/views/index.html');
});

var response = "Hello json";
app.get('/json', function(req, res){
    const message = process.env.MESSAGE_STYLE;
    if(message === "uppercase"){
        res.json({message : response.toUpperCase()});
    }else{

        res.json({message : response});
    }
});
































 module.exports = app;
