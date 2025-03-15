/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import AuthForm from '../../../../../components/common/AuthForm/AuthForm'
import TextField from '../../../../../components/common/TextField/TextField'

interface CandidateFormData {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phoneNumber: string,
  city: string
}

const CanidateLoginForm = () => {
  const [formData, setFormData] = useState<CandidateFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    city: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  console.log(formData)

  return (
    <></>
    // <AuthForm formTitle='Daxil ol' onSubmit={handleSubmit(onSubmit)}>
    //   <TextField
    //     onChange={handleChange}
    //     type='text'
    //     name='firstName'
    //     hasError={true}
    //     // error=''
    //     hasLabel={false}
    //     placeholder='Eldar'
    //     gap='5px' />
    //   <TextField
    //     onChange={handleChange}
    //     type='text'
    //     name='lastName'
    //     hasError={false}
    //     // error=''
    //     hasLabel={false}
    //     placeholder='Sadiqli'
    //     gap='5px' />
    // </AuthForm>
  )
}

export default CanidateLoginForm