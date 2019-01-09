const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let itemSchema = new Schema ({
  name: { type: String, required: true }
});

itemSchema.pre('save', function (callback) {
  if (typeof this.name !== 'string') {
    return callback(new Error('Invalid name'));
  }

  callback();
});

let Item = mongoose.model('Item', itemSchema);

module.exports = Item;