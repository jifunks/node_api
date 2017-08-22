const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express(); // instantiate express framework

const port = 8000;

require('./app/routes')(app, {});

app.listen(port, () => {
  console.log('Currently live on port: ' + port);
});
