var express = require('express');

var app = express();
app.listen(3000);

app.get('/', function (req,res){
    res.sendFile(__dirname + '/index.html')
})
app.get('/contact', function (req,res){
    res.send('this is the contact page')
})

//id may relate to a particular user in the database
app.get('/profile/:id', function (req,res){
    res.send('you requested to see the id of ' + req.params.id)
})