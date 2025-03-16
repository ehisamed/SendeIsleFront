import React from 'react';
import styled from 'styled-components';
import style from './authForm.style.module.scss';
import FlexColumnContainer from '../../ui/FlexContainers/FlexColumnContainer';
import FlexRowContainer from '../../ui/FlexContainers/FlexRowContainer';
import LinkButton from '../../ui/Buttons/LinkButton';

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
    hasBack?: boolean;
    backTo?: string | undefined,
    backInner?: React.ReactNode,
    headImg?: string,
    flexShrik?: string
}

const AuthForm: React.FC<AuthFormProps> = ({
    children,
    formTitle,
    gap = '0px',
    padding = '0px',
    onSubmit,
    hasBack,
    backTo,
    backInner,
    headImg,
    flexShrik,
}) => {
    return (
        <AuthFormContainer
            $gap={gap}
            $padding={padding}
            onSubmit={onSubmit}
            style={{
                flexShrink: flexShrik
            }}
        >
            {headImg && (
                <img src={headImg} alt="" style={{ width: '120px', height: 'auto', marginBottom: '25px'}}/>
            )}
            <FlexRowContainer gap='10px'>
                {hasBack && backTo && (<LinkButton to={backTo}>{backInner}</LinkButton>)}
                <h3 className={style['auth-form__form-title']}>{formTitle}</h3>
            </FlexRowContainer>
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