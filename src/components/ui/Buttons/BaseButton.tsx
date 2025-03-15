import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 100%;
    border: none;
    padding: 0px;
    background: #3575E2;
    padding: 8px 12px;
    color: #fff;
    font-size: 14px;
    border-radius: 3px;
    margin-top: 10px;
    cursor: pointer;
`

interface ButtonProps {
    children: React.ReactNode;
    width?: 'fit-content' | string
    background?: string;
    padding?: string;
    color?: string;
    marginTop?: string;
    type?: 'button' | 'submit' | 'reset';
    
}


const BaseButton: React.FC<ButtonProps> = ({ children, background, padding, color, marginTop, width, type }) => {
  return (
    <StyledButton type={type} style={{
        width: width,
        background: background,
        padding: padding,
        color: color,
        marginTop: marginTop
    }}>
        {children}
    </StyledButton>
  )
}

export default BaseButton