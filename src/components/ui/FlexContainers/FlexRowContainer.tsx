import React from 'react';
import styled from 'styled-components';

type RowContainerProps = {
  $align: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';
  $gap: string;
  $padding: string;
  $width: string;
};

const RowContainer = styled.div<RowContainerProps>`
  display: flex;
  align-items: ${({ $align }) => $align};
  padding: ${({ $padding }) => $padding};
  gap: ${({ $gap }) => $gap};
  width: ${({ $width }) => $width};
`;

interface Props {
  children: React.ReactNode;
  align?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';
  gap?: string;
  padding?: string;
  width?: string;
  height?: string;
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
}

const FlexRowContainer: React.FC<Props> = ({
  children,
  align = 'center',
  gap = '0px',
  padding = '0px',
  width = '100%',
  height,
  justifyContent = 'flex-start'
}) => {
  return (
    <RowContainer
      $align={align}
      $gap={gap}
      $padding={padding}
      $width={width}
      style={{
        height: height,
        justifyContent: justifyContent
      }}
    >
      {children}
    </RowContainer>
  );
};

export default FlexRowContainer;