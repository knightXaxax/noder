var express = require('express')


app.get('/', function(req, res) {
    res.send('Hello Tantan!');
})

var server = app.listen(3000, () => {
    console.log(`noder app is listening on port ${server.address().port}`)
})