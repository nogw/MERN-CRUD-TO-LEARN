import validator from 'validator';
import isEmpty from './isEmpty'
import validateRegister from './validateRegister';

const validateLogin = (data: any) => {
  const errors: any = {};

  data.password = !isEmpty(data.password) ? data.password : '';
  data.email = !isEmpty(data.email) ? data.email : '';

  if (!validator.isEmail(data.email)) {
    errors.email = `Email is invalid`
  } 

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password field is required'
  }

  return {
    errors, 
    isValid: isEmpty(errors)
  }
}

export default validateLogin