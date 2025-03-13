import React from 'react'
import FlexColumnContainer from '../FlexContainers/FlexColumnContainer'
import style from './textField.style.module.scss'

interface Props {
    hasError: boolean
    error?: string
    hasLabel: boolean
    label?: string 
    gap?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: 'text' | 'password'
    name: string
    placeholder: string
}

const TextField: React.FC<Props> = ({ 
    error, hasError, gap, onChange, type, name, placeholder, hasLabel, label 
}) => {
  return (
    <FlexColumnContainer width='fit-content' padding={type} gap={gap} align='flex-start'>
        {hasLabel && <p className={style['text-field-label']}>{label}</p>}
        <input onChange={onChange} placeholder={placeholder} name={name} type="text" className={style['text-field']}/>
        {hasError && <p className={style['text-field-error']}>{error}</p>}
    </FlexColumnContainer>
  )
}

export default TextField