import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const StyledLinkButton = styled.button`
    border: none;
    background: none;
    padding: 0px;
    outline: none;
    cursor: pointer;
    width: fit-content;
    height: auto;
`

interface LinkButtonProps {
    children: React.ReactNode;
    width?: string,
    height?: string,
    to: string
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, width, height, to }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    }

    return (
        <StyledLinkButton onClick={handleClick}>
            {children}
        </StyledLinkButton>
    )
}

export default LinkButton