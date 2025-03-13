import React from 'react'
import styled from 'styled-components'

type RowContainerProps = {
  justifyContent: string,
  align: string,
  gap: string,
  padding: string,
}

const RowContainer = styled.div<RowContainerProps>`
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ align }) => align};
    padding: 0px;
    gap: ${({ gap }) => gap};
    padding: ${({ padding }) => padding};
`

interface Props {
  children: React.ReactNode,
  justifyContent?: 'start' | 'space-between' | 'end' | 'space-around' | 'space-evenly',
  align?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';
  gap?: string;
  padding?: string;
}

const FlexRowContainer: React.FC<Props> = ({
  children, justifyContent = 'start', align = 'flex-end', gap = '0px', padding = '0px'
}) => {
  return (
    <RowContainer
      justifyContent={justifyContent}
      align={align}
      gap={gap}
      padding={padding}
    >
      {children}
    </RowContainer>
  )
}

export default FlexRowContainer