'use strict';

let express = require('express');
let app = express();

app.get('/:instanceId/', function (req, res) {
    let instanceId = req.params['instanceId'];
    let text = 'Hello! ';
    text += `The current instance is "${instanceId}""`;
    console.log(req.hostname);
    res.send(text);
});


let port = process.env.PORT || 3000

// the middleware is initialized now, so start the server 
app.listen(port);
