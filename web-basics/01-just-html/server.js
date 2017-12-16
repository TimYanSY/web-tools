var express = require('express');
var app = express();
var port = 8000;

app.use(express.static('static'));

app.listen(port, function() { console.log(`
Webserver running on port ${port}
You can go to http://localhost:${port}/
`); });
