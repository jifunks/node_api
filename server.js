const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express(); // instantiate express framework

const port = 8000;

// required since Express can't process encoded forms on its own  
app.use(bodyParser.urlencoded({ extended: true}));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  require ('./app/routes')(app, database);
  app.listen(port, () => {
    console.log('Currently live on port: ' + port);
  });
})
