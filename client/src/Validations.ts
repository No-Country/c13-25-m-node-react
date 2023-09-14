interface User {
  [key: string]: string
}

interface Errors {
  [key: string]: string | boolean
}

type ValidationType = 'email' | 'password' | 'name' | 'passwordAgain'

interface ValidationResult {
  changedInfoInput: Partial<User>
  err: Errors
  value: string
}

export const Validation = (
  e: React.ChangeEvent<HTMLInputElement>,
  name: string,
  type: ValidationType,
  required: boolean = false,
  maxLength: number | false = false,
  minLength: number | false = false,
  user: User,
  errors: Errors
): ValidationResult => {
  const value = e.target.value
  const changedInfoInput: Partial<User> = { ...user, [e.target.name]: value }
  const err: Errors = { ...errors }
  const filterMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const filterPass = /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]/

  switch (type) {
    case 'email':
      changedInfoInput[name] = e.target.value
      if (required) {
        err[name] = e.target.value ? false : 'El campo es requerido'
      }
      if (maxLength !== false && !err[name]) {
        err[name] =
          e.target.value.length > maxLength
            ? 'El campo debe tener hasta 75 caracteres'
            : false
      }
      if (minLength !== false && !err[name]) {
        err[name] =
          e.target.value.length < minLength
            ? 'El campo debe tener más de 8 caracteres'
            : false
      }
      if (filterMail.test(value) === false) {
        err[name] = 'Ingrese un mail válido'
      }
      break

    case 'password':
      changedInfoInput[name] = e.target.value
      if (required) {
        err[name] = e.target.value ? false : 'El campo es requerido'
      }
      if (maxLength !== false && !err[name]) {
        err[name] =
          e.target.value.length > maxLength
            ? 'El campo debe tener hasta 12 caracteres'
            : false
      }
      if (minLength !== false && !err[name]) {
        err[name] =
          e.target.value.length < minLength
            ? 'El campo debe tener más de 6 caracteres'
            : false
      }
      if (filterPass.test(value) === false) {
        err[name] =
          'Debe tener al menos una mayúscula, un número y un caracter especial'
      }
      break

    case 'passwordAgain':
      changedInfoInput[name] = e.target.value
      if (required) {
        err[name] = e.target.value ? false : 'El campo es requerido'
      }
      if (maxLength !== false && !err[name]) {
        err[name] =
          e.target.value.length > maxLength
            ? 'El campo debe tener hasta 12 caracteres'
            : false
      }
      if (minLength !== false && !err[name]) {
        err[name] =
          e.target.value.length < minLength
            ? 'El campo debe tener más de 6 caracteres'
            : false
      }
      if (changedInfoInput.passwordAgain !== changedInfoInput.password) {
        err[name] = 'Chequee que las contraseñas sean iguales.'
      } else {
        err[name] = false
      }
      break

    case 'name':
      changedInfoInput[name] = e.target.value
      if (required) {
        err[name] = e.target.value ? false : 'El campo es requerido'
      }
      if (maxLength !== false && !err[name]) {
        err[name] =
          e.target.value.length > maxLength
            ? 'El campo debe tener hasta 25 caracteres'
            : false
      }
      if (minLength !== false && !err[name]) {
        err[name] =
          e.target.value.length < minLength
            ? 'El campo debe tener más de 6 caracteres'
            : false
      }
      break

    default:
      break
  }

  return { changedInfoInput, err, value }
}
