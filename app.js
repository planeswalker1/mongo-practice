const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./models/config');
const items = require('./controllers/items');

let app = express();

mongoose.connect('mongodb://'+ config.dbUrl +'/item', {useNewUrlParser: true})

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

// check :id parameter if a route uses it
app.param('id', function (req, res, next, id) {
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).send('Invalid ID');
  }

  return next();
});

// Task:
// Create a c.r.u.d. items api using mongoose. clients should be able to create new items, get all items, get a single item, update a item (based on their id), and delete a item.

// The Item schema should have a required property called name with a type of string.

// Organize and split your javascript instead of having it in a single file
// Use mongodb and mongoose to store the data

// Extra challenge:
// Don't insert values other than name. reject creations if they don't have a name.

// pseudo code:
// connect to mongodb

// create schema
// base objects
  // name: "pen"

// post route to create an item
// get route to get all items
// get route to get a specific item, taking an id
// put route to update an item, taking an id and object that contains the updated properties
// delete route to delete an item, taking in an id


// ====================
// Routes
// ====================

app.get('/items', items.getItems);
app.get('/items/:id', items.getItemById);
app.post('/items', items.createItem);
app.put('/items/:id', items.updateItemById);
app.delete('/items/:id', items.deleteItemById);

// handle 404
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
if (dev) {
  app.use(function(err, req, res, next) {
      console.log(err);
      res.status(err.status || 500).send(err.message || 'whoops something crashed go back to /items');
  });
}

// production error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send();
});

let server = app.listen(config.port, function () {
  console.log('Listening at http://localhost:%s in %s mode', server.address().port, app.get('env'));
});