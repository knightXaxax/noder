var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Hello Tantan Pogi!');
})

var server = app.listen(3000, () => {
    console.log(`noder app is listening on port ${server.address().port}`)
})