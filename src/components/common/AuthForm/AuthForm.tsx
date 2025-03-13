import React from 'react'
import style from './authForm.style.module.scss'
import FlexColumnContainer from '../FlexContainers/FlexColumnContainer';
import styled from 'styled-components';

interface AuthFormContainerProps {
    minWidth: string
    justifyContent: string
    gap: string
    padding: string
    alignItems: string
}

const AuthFormContainer = styled.div<AuthFormContainerProps>`
    min-width: ${({ minWidth }) => minWidth};
    display: flex;
    flex-direction: column;
    justify-content: ${({ justifyContent }) => justifyContent};
    gap: ${({ gap }) => gap};
    padding: ${({ padding }) => padding};
    align-items: ${({ alignItems }) => alignItems};
`

interface AuthFormProps {
    children: React.ReactNode,
    formTitle: string,
    minWidth?: string,
    justifyContent?: 'start' | 'space-between' | 'end' | 'space-around' | 'space-evenly' | 'center',
    gap?: string,
    padding?: string,
    alignItems?: 'flex-start' | 'center' | 'flex-end';
}

const AuthForm: React.FC<AuthFormProps> = ({
    children, formTitle, minWidth = '0', justifyContent = 'start', gap = '0px', padding = '0px', alignItems = 'flex-start'
}) => {
    return (
        <AuthFormContainer
            minWidth={minWidth}
            justifyContent={justifyContent}
            gap={gap}
            padding={padding}
            alignItems={alignItems}
        >
            <h3 className={style['auth-form__form-title']}>{formTitle}</h3>
            <FlexColumnContainer
                padding='0px'
                gap='5px'
                align='flex-start'
                width='fit-content'
            >
                {children}
            </FlexColumnContainer>
        </AuthFormContainer>
    )
}

export default AuthForm