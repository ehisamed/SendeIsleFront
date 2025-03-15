// components/common/MUITextField.tsx
import React from 'react';
import { TextField as MuiTextField, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface MUITextFieldProps {
    register: UseFormRegister<any>;
    name: string;
    error?: FieldError;
    helperText?: string;
    placeholder?: string;
    type?: string;
    startAdornment?: React.ReactNode;
    validation?: any;
    endAdornment?: React.ReactNode;
}

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        fontSize: '14px',
        color: 'black',
        backgroundColor: "transparent",

        // Убедитесь, что селектор более специфичен
        '&:-webkit-autofill': {
            backgroundColor: 'transparent !important',
            color: 'black !important',
            // Добавьте другие стили, если нужно
            boxShadow: '0 0 0px 1000px transparent inset !important',
        },
        // Стили для -internal-autofill-selected
        '&:-internal-autofill-selected': {
            appearance: 'menulist-button',
            backgroundImage: 'none !important',
            backgroundColor: '#ffffff !important', // Замените на нужный вам цвет
            color: 'black !important', 
        },
    },
    '& label': {
        display: 'none',
    },
    "&.Mui-focused": {
        backgroundColor: "transparent", // Убираем фон при фокусе
        boxShadow: "none" // Убираем тень
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E8E8E8',
            backgroundColor: "transparent",
        },
        '&:hover fieldset': {
            borderColor: '#3575E2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#3575E2',
            backgroundColor: "transparent",
        },
    },
    '& .MuiFormHelperText-root': {
        color: 'red',
        fontSize: '12px',
        marginLeft: '0px',
        marginBottom: '0px',
    },


}));

const TextFieldExtraStyle = {
    mt: '15px',
    fontSize: '12px',
    '& .MuiInputBase-input': {
        paddingBlock: '8px 6px',
        '&:focus': {
            outline: 'none',
            boxShadow: 'none',
        },
    },
};

const MUITextField: React.FC<MUITextFieldProps> = ({
    register,
    name,
    error,
    helperText,
    placeholder,
    type,
    startAdornment,
    validation,
    endAdornment
}) => {
    return (
        <StyledTextField
            {...register(name, validation)}
            error={!!error}
            helperText={helperText}
            variant="outlined"
            fullWidth
            placeholder={placeholder}
            type={type}
            InputProps={{
                startAdornment: startAdornment && (
                    <InputAdornment position='start' >
                        {startAdornment}
                    </InputAdornment>
                ),
                endAdornment: endAdornment && (
                    <InputAdornment position='end'>
                        {endAdornment}
                    </InputAdornment>
                )
            }}
            sx={TextFieldExtraStyle}
        />
    );
};

export default MUITextField;