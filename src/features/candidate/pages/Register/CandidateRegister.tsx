import React from 'react'
import CandidateRegisterForm from '../../components/forms/CandidateRegisterForm/CandidateRegisterForm'
import { images } from '../../../../assets/images'
import FlexRowContainer from '../../../../components/ui/FlexContainers/FlexRowContainer'
import style from './register.style.module.scss'

const CandidateRegister = () => {
  return (
    <FlexRowContainer align='center' gap='45px' width='100%' height='100vh' justifyContent='center'>
      <img src={images.image} className={style['register-img']} alt="" />
      <CandidateRegisterForm />
    </FlexRowContainer>
  )
}

export default CandidateRegister