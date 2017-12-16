const express = require('express');
const bodyParser = require('body-parser');
const polling = require('./polling');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('static'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/poll', ( request, response ) => {
  response.send(polling.showQuestion());
});
app.get('/results', ( request, response ) => {
  response.send(polling.showResults());
});
app.post('/results', ( request, response ) => {
  response.send(polling.addResult(request.body.choice));
});

app.listen(port, function() { console.log(`
Webserver running on port ${port}
You can go to http://localhost:${port}/
`); });
