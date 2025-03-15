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
}

const FlexRowContainer: React.FC<Props> = ({
  children,
  align = 'flex-start',
  gap = '0px',
  padding = '0px',
  width = '100%',
}) => {
  return (
    <RowContainer
      $align={align}
      $gap={gap}
      $padding={padding}
      $width={width}
    >
      {children}
    </RowContainer>
  );
};

export default FlexRowContainer;