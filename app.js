const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let app = express();

// log if in dev mode
if (app.get('env') === 'development') {
  var dev = true;
}
if (dev) {
  app.use(logger('dev'));
}

// create req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Task:
// Create a c.r.u.d. items api using mongoose. clients should be able to create new items, get all items, get a single item, update a item (based on their id), and delete a item.

// The Item schema should have a required property called name with a type of string.

// Organize and split your javascript instead of having it in a single file
// Use mongodb and mongoose to store the data

// Extra challenge:
// Don't insert values other than name. reject creations if they don't have a name.




// handle error
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
if (dev) {
  app.use(function(err, req, res, next) {
      console.log(err);
      res.status(err.status || 500).send(err.message || 'whoops something crashed go back to /users');
  });
}

// production error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send();
});

let server = app.listen(3000, function () {
  console.log('Listening at http://localhost:%s in %s mode', server.address().port, app.get('env'));
});