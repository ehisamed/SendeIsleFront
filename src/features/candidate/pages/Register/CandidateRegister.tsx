import React from 'react'
import CandidateRegisterForm from '../../components/forms/CandidateRegisterForm/CandidateRegisterForm'
import FlexColumnContainer from '../../../../components/ui/FlexContainers/FlexColumnContainer'

const CandidateRegister = () => {

  return (
    <FlexColumnContainer align='center' width='100%' height='100vh' gap='45px' justifyContent='center' padding='18px'>
      <CandidateRegisterForm/>
    </FlexColumnContainer>
  )
}

export default CandidateRegister