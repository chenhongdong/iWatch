var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});

});

app.post('/ajax/deal', function (req, res) {
    var data = {
        name: req.body.name,
        id: req.body.id
    };
    console.log(data);
    res.send(data);
});

app.listen(3000);