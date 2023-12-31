let express = require('express');
let app = express();
let bodyParser = require('body-parser');

var env = require('dotenv').config();

let middleware = express.static(__dirname+'/public');
let mware_func = function(req,res, next){
    console.log(req.method+" "+req.path+" - "+req.ip);
    next();
};
let bodyParserMiddleware = bodyParser.urlencoded({extended: false});

app.use('/public',middleware);
app.use(mware_func);
app.use(bodyParserMiddleware);
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

app.get('/now', function(req, res, next){
    req.time = new Date().toString();
    next();
}, function(req, res){
    res.json({"time" : req.time});
});

app.get('/:word/echo', function(req, res){
    res.json({echo: req.params.word});
});

app.get('/name', function(req, res){
    var firstname = req.query.first;
    var lastname = req.query.last;
    res.json({name:`${firstname} ${lastname}`});
});

app.post('/name', function(req, res){
    var firstname = req.body.first;
    var lastname = req.body.last;
    res.json({name:`${firstname} ${lastname}`});
    
});


























 module.exports = app;
