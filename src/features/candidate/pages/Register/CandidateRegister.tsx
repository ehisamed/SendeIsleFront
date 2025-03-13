import React from 'react'
import CandidateRegisterForm from '../../components/forms/CandidateRegisterForm/CandidateRegisterForm'
import { images } from '../../../../assets/images'
import FlexRowContainer from '../../../../components/common/FlexContainers/FlexRowContainer'

const CandidateRegister = () => {
  return (
    <FlexRowContainer align='center' gap='45px' justifyContent='center' width='100%'>
      <img src={images.image} alt="" />
      <CandidateRegisterForm />
    </FlexRowContainer>
  )
}

export default CandidateRegister