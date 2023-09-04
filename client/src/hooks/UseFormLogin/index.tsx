import { useState } from 'react'
import { useAuth } from '@/context'
interface FormValues {
  email: string
  password: string
}

export const UseFormLogin = () => {
  const [formData, setFormData] = useState<FormValues>({
    email: '',
    password: '',
  })
  const { login } = useAuth()
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)

  const isFormValid = isEmailValid && isPasswordValid

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(formData.password, formData.email)
    //login(formData.password, formData.email.toLowerCase())
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      setIsEmailValid(emailRegex.test(value))
    }
    if (name === 'password') {
      setIsPasswordValid(value.length >= 8)
    }
  }
  return { isFormValid, handleSubmit, handleChange, formData }
}
