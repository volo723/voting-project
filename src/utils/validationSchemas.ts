import { object, string, boolean/*, ref, array, number*/ } from 'yup'

/**
 * Signin form validation schema
 *
 * @type {Object}
 */
export const loginFormValidationSchema = object().shape({
  email: string()
    .required('Email address is required.')
    .email('Email address must be valid.'),
  password: string().required('Password is required.')
})
