import React from 'react'
import styled from 'styled-components'

const RowContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0px;
`

interface Props {
    children: React.ReactNode
}

const FlexRowContainer: React.FC<Props> = ({ children }) => {
  return (
    <RowContainer>{children}</RowContainer>
  )
}

export default FlexRowContainer