import Joi from 'Joi';

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).trim().required().messages({
    'string.email': 'must be a valid email',
    'string.empty': 'email is required',
  }),
  password: Joi.string().alphanum().min(6).required().trim().messages({
    'string.empty': 'password is required',
    'string.alphanum': 'password must contain only numbers or alphabets',
    'string.min': 'password must have at least 6 characters',
  }),
});

const validateLogin = (input) => {
  const { error } = loginSchema.validate(input);
  if (error) {
    const result = error.details;
    return result;
  }
};

export default validateLogin;
