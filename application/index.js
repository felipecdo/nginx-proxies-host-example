'use strict';

let express = require('express');
let app = express();

app.get('/:instanceId/', function (req, res) {
    let instanceId = req.params['instanceId'];
    let text = 'Hello! ';
    text += `The current instance is "${instanceId}" - host : "${req.hostname}"`;
    console.log(req.hostname);
    res.send(text);
});

app.get('/:instanceId/:userId', function (req, res) {
    let instanceId = req.params['instanceId'];
    let userId = req.params['userId'];
    let text = 'Hello! ';
    text += `Instance is "${instanceId}" , User is "${userId}" `;
    res.send(text);
});

const myObject = 
{
    "1": "response from instance 1",
    "24": "response from instance 24",
    "25": "response from instance 25!!!!",
}
app.get('/:instanceId/users', function (req, res) {
    let instanceId = req.params['instanceId'];
    let text = myObject[instanceId];
    res.send(text);
});


let port = process.env.PORT || 3000

// the middleware is initialized now, so start the server 
app.listen(port);
