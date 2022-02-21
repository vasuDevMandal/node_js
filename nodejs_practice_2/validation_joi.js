const Joi = require("joi");

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(20).required(),
  dob: Joi.number().integer().min(1960).max(2021),
});

const { error, value } = schema.validate({
  username: "as2dfa",
  dob: "2010",
});
console.log("error: ", error);
console.log("value:", value);
