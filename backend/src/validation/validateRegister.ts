import validator from 'validator'
import isEmpty from './isEmpty'

const validateRegister = (data: any) => {
  const errors: any = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.post = !isEmpty(data.post) ? data.post : '';
  data.date = !isEmpty(data.date) ? data.date : '';

  if (validator.isEmpty(data.name)) {
    errors.name = 'Name field is required'
  }

  if (!validator.isEmail(data.email)) {
    errors.email = `Email is invalid`
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email is required'
  }

  if (validator.isEmpty(data.post)) {
    errors.post = 'post is required';
  }

  if (validator.isEmpty(data.date)) {
    errors.date = 'date is required';
  }

  return {
    errors, 
    isValid: isEmpty(errors)
  }
}

export default validateRegister