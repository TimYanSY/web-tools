const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const reporter = require('./formReporter').reporter;
const parseRequest = require('./formReporter').parseRequest;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

const manageForm =  (request, response, next) => {
  const report = parseRequest(request);
  const summary = reporter(report);
  console.log( summary.join('\n') );
  request.method="GET";
  next();
};

app.get('*', (request, response, next) => manageForm(request, response, next) );
app.post('*', (request, response, next) => manageForm(request, response, next) );
app.use(express.static('static'));

app.listen(port, function() { console.log(`
Webserver running on port ${port}
You can go to http://localhost:${port}/
`); });


