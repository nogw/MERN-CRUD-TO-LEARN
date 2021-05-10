import validator from 'validator'
import isEmpty from './isEmpty'

const validateRegister = (data: any) => {
  const errors: any = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.title = !isEmpty(data.title) ? data.title : '';
  data.post = !isEmpty(data.post) ? data.post : '';
  data.date = !isEmpty(data.date) ? data.date : '';

  if (validator.isEmpty(data.name)) {
    errors.name = 'name field is required'
  }

  if (validator.isEmpty(data.title)) {
    errors.title = 'title is required'
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