/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import AuthForm from '../../../../../components/common/AuthForm/AuthForm'
import TextField from '../../../../../components/common/TextField/TextField'


interface CandidateRegisterFormData {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phoneNumber: string,
  city: string
}


const CandidateRegisterForm = () => {
  const [formData, setFormData] = useState<CandidateRegisterFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    city: ''
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))

  }

  return (
    <AuthForm formTitle='Qeydiyyat'>
      <TextField
        hasError={false} 
        hasLabel={false} 
        onChange={handleFormChange}
        type={'text'}
        name={'firstName'}
        placeholder={''}
      />
    </AuthForm>
  )
}

export default CandidateRegisterForm