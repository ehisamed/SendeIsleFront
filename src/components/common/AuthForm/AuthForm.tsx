import React from 'react'
import style from './authForm.style.module.scss'
import FlexColumnContainer from '../FlexContainers/FlexColumnContainer';

interface Props {
    formTitle: string;
    children: React.ReactNode;

}

const AuthForm: React.FC<Props> = ({ children, formTitle }) => {
    return (
        <div className={style['auth-form']}>
            <h3 className={style['auth-form__form-title']}>{formTitle}</h3>
            <FlexColumnContainer
                padding='0px'
                gap='5px'
                align='flex-start'
                width='fit-content'
            >
                {children}
            </FlexColumnContainer>
        </div>
    )
}

export default AuthForm