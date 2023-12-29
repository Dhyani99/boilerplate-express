let express = require('express');
let app = express();

var env = require('dotenv').config();

console.log("Hello World");
let middleware = express.static(__dirname+'/public');
let mware_func = function(req,res, next){
    console.log(req.method+" "+req.path+" - "+req.ip);
    next();
};
app.use('/public',middleware);
app.use(mware_func);
app.get('/', function(req, res){
    res.sendFile(__dirname+'/views/index.html');
});

app.get('/json', function(req, res){
    var message = 'Hello json';
    if ( process.env.MESSAGE_STYLE === "uppercase") {
            message = message.toUpperCase();
    }
    
    res.json({ "message": message });
});
































 module.exports = app;
