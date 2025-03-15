import React from 'react';
import FlexColumnContainer from '../FlexContainers/FlexColumnContainer';
import style from './textField.style.module.scss';

interface Props {
    hasError: boolean;
    error?: string;
    hasLabel: boolean;
    label?: string;
    required?: boolean;
    gap?: string;
    type?: 'text' | 'password';
    name: string;
    placeholder: string;
    suffixIcon?: string;
    prefixIcon?: string;
}

const TextField: React.FC<Props> = ({ 
    error, hasError, gap, type = 'text', name, placeholder, hasLabel, label, required, suffixIcon, prefixIcon
}) => {
  return (
    <FlexColumnContainer width='fit-content' padding='0px' gap={gap} align='flex-start'>
        {hasLabel && <p className={style['text-field-label']}>{label}</p>}
        <div className={style['text-field-wrapper']}>
          {suffixIcon && (<img src={suffixIcon} alt="" className={style['text-field-wrapper__suffix-icon']}/>)}
          <input 
            required={required} 
            placeholder={placeholder} 
            name={name} 
            type={type}
            className={style['text-field']}
          />
          {prefixIcon && (<img src={prefixIcon} alt="" className={style['text-field-wrapper__prefix-icon']}/>)}
        </div>
        {hasError && <p className={style['text-field-error']}>{error}</p>}
    </FlexColumnContainer>
  );
}

export default TextField;