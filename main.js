
var express = require('express');
var app = express();
var PORT = 3030;

app.use(express.static(__dirname + '\\app'));
app.set('view engine', 'pug');
app.set('views', __dirname + '\\app\\views');

app.get(['/', '/home'], function (req, res) {
    
    let view = 'home';
    let title = 'Welcome';
    res.render(view, {view, title});
});

app.get('/about', function (req, res) {

    let view = 'about';
    let title = 'About';
    res.render(view, { view, title });
});

app.get('/services', function (req, res) {

    let view = 'services';
    let title = 'Services';
    res.render(view, { view, title });
});

/*
app.use(function (req, res, next) {
    
    res.status(404).send("Sorry, that route does not exist");
});
*/

app.listen(PORT, function () {
    
    console.log("server starts: " + PORT);
});
