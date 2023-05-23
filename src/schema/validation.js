const httpError = require('http-errors');

const validation = schema => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return next(httpError(400, 'missing required name field'));
    }
    next();
  };
};

module.exports = validation;
