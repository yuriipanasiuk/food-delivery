const { model, Schema } = require('mongoose');

const basketSchema = new Schema(
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

const Basket = model('basket', basketSchema);

module.exports = Basket;
