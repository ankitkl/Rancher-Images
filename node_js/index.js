var express = require('express');

var app = express();

app.get('/', function(req, res){
    console.log('The value of PORT is:', process.env.PORT);
    res.send('The value of PORT is:', process.env.PORT);
});

app.listen(8080);
