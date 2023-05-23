const { model, Schema } = require('mongoose');

const macSchema = new Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Mac = model('mac', macSchema);

module.exports = Mac;
