import React from 'react'
import styled from 'styled-components'

type RowContainerProps = {
  justifyContent: string,
  align: string,
  gap: string,
  padding: string,
  width: string,
  minWidth: string
}

const RowContainer = styled.div<RowContainerProps>`
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ align }) => align};
    padding: 0px;
    gap: ${({ gap }) => gap};
    padding: ${({ padding }) => padding};
    width: ${({ width }) => width};
    min-width: ${({ minWidth}) => minWidth };
`

interface Props {
  children: React.ReactNode,
  justifyContent?: 'start' | 'space-between' | 'end' | 'space-around' | 'space-evenly' | 'center',
  align?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';
  gap?: string,
  padding?: string,
  width?: string,
  minWidth?: string,
}

const FlexRowContainer: React.FC<Props> = ({
  children, justifyContent = 'start', align = 'flex-end', gap = '0px', padding = '0px', width = '100%', minWidth = '0'
}) => {
  return (
    <RowContainer
      justifyContent={justifyContent}
      align={align}
      gap={gap}
      padding={padding}
      width={width}
      minWidth={minWidth}
    >
      {children}
    </RowContainer>
  )
}

export default FlexRowContainer