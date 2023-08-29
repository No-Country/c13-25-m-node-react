import { useState } from 'react'
import { Validation } from '@/Validations'

interface UserSignup {
  name: string
  email: string
  password: string
  passwordAgain: string
  [key: string]: string
}
interface Errors {
  [key: string]: string | boolean
}
interface HandleInputChangeProps {
  e: React.ChangeEvent<HTMLInputElement>
  name: string
  type: 'email' | 'password' | 'name' | 'passwordAgain'
  required?: boolean
  maxLength?: number
  minLength?: number
}

export const UseFormSignup = () => {
  const [userForm, setUserForm] = useState<UserSignup>({
    name: '',
    email: '',
    password: '',
    passwordAgain: '',
  })
  const initialErrors: Errors = {
    name: '',
    email: '',
    password: '',
    passwordAgain: '',
  }
  const [errors, setErrors] = useState<Errors>(initialErrors)
  const [isFormValid, setIsFormValid] = useState(false)
  const handleInputChange = ({
    e,
    name,
    type,
    required,
    maxLength,
    minLength,
  }: HandleInputChangeProps): void => {
    const { changedInfoInput, value, err } = Validation(
      e,
      name,
      type,
      required,
      maxLength,
      minLength,
      userForm,
      errors
    )
    setUserForm(
      (prevUser) =>
        ({
          ...prevUser,
          [e.target.name]: value,
          ...changedInfoInput,
        }) as UserSignup
    )
    setErrors(err)
    const anyErrorPresent = Object.values(err).some(
      (error) => typeof error === 'string'
    )
    setIsFormValid(!anyErrorPresent)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
  }
  return { handleSubmit, isFormValid, handleInputChange, errors, userForm }
}
