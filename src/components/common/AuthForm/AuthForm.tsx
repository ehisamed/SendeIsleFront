import React from 'react';
import styled from 'styled-components';
import style from './authForm.style.module.scss';
import FlexColumnContainer from '../FlexContainers/FlexColumnContainer';

interface AuthFormContainerProps {
    $gap: string;
    $padding: string;
}

const AuthFormContainer = styled.form<AuthFormContainerProps>`
    display: flex;
    flex-direction: column;
    gap: ${({ $gap }) => $gap};
    padding: ${({ $padding }) => $padding};
`;

interface AuthFormProps {
    children: React.ReactNode;
    formTitle: string;
    gap?: string;
    padding?: string;
    alignItems?: 'flex-start' | 'center' | 'flex-end';
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
    children,
    formTitle,
    gap = '0px',
    padding = '0px',
    onSubmit,
}) => {
    return (
        <AuthFormContainer
            $gap={gap}
            $padding={padding}
            onSubmit={onSubmit}
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
    );
};

export default AuthForm;