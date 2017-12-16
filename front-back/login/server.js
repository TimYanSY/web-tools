const express = require('express');
const app = express();
const fetch = require('node-fetch');
const path = require('path');
const http = require('http');
const cookie = require('cookie');

app.use(express.json({limit: '50mb'}));
app.use(express.static('build'));

app.get('/api/:user/:token', (req, res) => {
    
    fetch('http://sea-info6250-crud.herokuapp.com/users/test/',{
        method: 'GET',
        headers: { cookie: `userToken=${req.params.token}` }
    })
        .then( response => response.ok 
              ? response.json()
              : response.json().then( err => Promise.reject(err)) )
        .then(function(response){ 
        res.send(JSON.stringify(response))
    }) 
        .catch( err => console.warn(err) );
});

app.listen(3001, () => {
    console.log('http://localhost:3001/');
});
