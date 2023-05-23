const Joi = require('joi');

const goodValidationSchema = Joi.object({
  id: Joi.string().required(),
});

module.exports = goodValidationSchema;
