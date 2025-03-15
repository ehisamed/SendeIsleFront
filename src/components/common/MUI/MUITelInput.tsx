/* eslint-disable no-mixed-operators */
import React from 'react';
import { MuiTelInput } from 'mui-tel-input';
import { styled } from '@mui/material/styles';
import { UseFormRegister, FieldError, UseFormSetValue, Path, FieldValues } from 'react-hook-form';

interface MUITelInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  error?: FieldError;
  helperText?: string;
  setValue: UseFormSetValue<T>;
  watch: (name: Path<T>) => any;
  validation?: any;
}

const StyledTelInput = styled(MuiTelInput)(({ theme }) => ({
  '& .MuiInputBase-input': {
    fontSize: '14px',
    color: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E8E8E8',
    },
    '&:hover fieldset': {
      borderColor: '#3575E2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#3575E2',
    },
  },
  '& .MuiFormHelperText-root': {
    color: 'red',
    fontSize: '12px',
    marginLeft: '0px',
    marginBottom: '5px',
    padding: '0px',
  },
}));

const TextFieldExtraStyle = {
  mt: '10px',
  fontSize: '12px',
  '& .MuiInputBase-input': {
    paddingBlock: '8px 6px',
    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
    },
  },
};

const MUITelInput = <T extends FieldValues>({
  register,
  name,
  error,
  helperText,
  setValue,
  watch,
  validation
}: MUITelInputProps<T>) => {
  return (
    <StyledTelInput
      {...register(name, {
        ...validation,
        validate: {
            required: (value) => {
              return value && value !== '+994' || "Номер телефона обязателен";
            },
            validPhone: (value) => {
              const cleanedValue = value.replace(/[^+\d]/g, '');
              const phoneRegex = /^\+994(50|51|55|70|77|99)\d{7}$/;
              return phoneRegex.test(cleanedValue) || "Неверный формат номера телефона";
            }
          }
      })}
      error={!!error}
      helperText={helperText}
      variant="outlined"
      fullWidth
      defaultCountry="AZ"
      onlyCountries={['AZ']}
      onChange={(value: string) => { 
        setValue(name, value as any); 
      }}
      value={watch(name) || ''}
      sx={TextFieldExtraStyle}
    />
  );
};

export default MUITelInput;