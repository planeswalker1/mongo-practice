const Item = require('../models/schemas/item');

module.exports.getItems = function (req, res, next) {
  Item.find({}, function (err, items) {
    if (err) {
      return next(err);
    }

    return res.json(items);
  });
};

module.exports.getItemById = function (req, res, next) {
  Item.findById(req.params.id, function (err, item) {
    if (err) {
      return next(err);
    }

    if (!item) {
      return res.status(404).send('No item with that ID');
    }

    return res.json(item);
  });
};

module.exports.createItem = function (req, res, next) {
  let newItem = new Item(req.body);
  newItem.save(function (err, item) {
    if (err) {
      return next(err);
    }

    return res.sendStatus(200);
  });
};

module.exports.updateItemById = function (req, res, next) {
  Item.findOneAndUpdate(req.params.id, req.body, { new: true }, function (err, item) {
    if (err) {
      return next(err);
    }

    if (!item) {
      return res.status(400).send('No item with that ID');
    }

    return res.json(item);
  });
};

module.exports.deleteItemById = function (req, res, next) {
  console.log('this ran');
  Item.findByIdAndRemove(req.params.id, function (err, item) {
    if (err) {
      next(err);
    }

    if (!item) {
      return res.status(404).send('No item with that ID');
    }

    return res.sendStatus(200);
  });
};