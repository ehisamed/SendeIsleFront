import React from 'react'
import styled from 'styled-components'

type ColumnContainerProps = {
  align: string;
  padding: string;
  gap: string;
  width: string;
}

const ColumnContainer = styled.div<ColumnContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
  overflow: hidden;
`
interface Props {
  children: React.ReactNode;
  align?: 'flex-start' | 'center' | 'flex-end';
  padding?: string;
  gap?: string;
  width: 'fit-content' | string;
}

const FlexColumnContainer: React.FC<Props> = ({
  children, align = 'center', padding = '0px', gap = '0px', width='fit-content'
}) => {
  return (
    <ColumnContainer width={width} gap={gap} padding={padding} align={align}>{children}</ColumnContainer>
  )
}

export default FlexColumnContainer