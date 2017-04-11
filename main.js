
var express = require('express');
var app = express();
var PORT = 3030;

app.use(express.static(__dirname + '\\app'));
app.set('view engine', 'pug');
app.set('views', __dirname + '\\app\\views');

app.get(['/', '/home'], function (req, res) {
    
    res.render('home');
});

app.get('/about', function (req, res) {

    res.render('about');
});

app.get('/services', function (req, res) {

    res.render('services');
});

/*
app.use(function (req, res, next) {
    
    res.status(404).send("Sorry, that route does not exist");
});
*/

app.listen(PORT, function () {
    
    console.log("server starts: " + PORT);
});
