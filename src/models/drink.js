const { model, Schema } = require('mongoose');

const drinkSchema = new Schema(
  {
    title: {
      type: String,
    },
    url: {
      type: String,
    },
    price: {
      type: String,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

const Drink = model('drinks', drinkSchema);

module.exports = Drink;
