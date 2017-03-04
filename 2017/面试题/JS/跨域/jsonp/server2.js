var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/jsonp', function (req, res) {
    var data = "{" + "name:'" + req.query.name + "'," + "id:'" + req.query.id + "'" +"}";
    console.log(data);
    var callback = req.query.cb;
    var jsonp = callback + '(' + data + ')';
    res.send(jsonp);
});

app.listen(3001);