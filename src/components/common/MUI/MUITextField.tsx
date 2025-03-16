// components/common/MUITextField.tsx
import React from 'react';
import { TextField as MuiTextField, InputAdornment, FormHelperText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { UseFormRegister, FieldError } from 'react-hook-form';
import FlexColumnContainer from '../../ui/FlexContainers/FlexColumnContainer';

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
    helperTextWidth?: string;
}

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        fontSize: '14px',
        color: 'black',
        backgroundColor: "transparent",

        '&:-webkit-autofill': {
            backgroundColor: 'transparent !important',
            color: 'black !important',
            boxShadow: '0 0 0px 1000px transparent inset !important',
        },
        '&:-internal-autofill-selected': {
            appearance: 'menulist-button',
            backgroundImage: 'none !important',
            backgroundColor: '#ffffff !important',
            color: 'black !important',
        },
    },
    '& label': {
        display: 'none',
    },
    "&.Mui-focused": {
        backgroundColor: "transparent",
        boxShadow: "none"
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
    // '& .MuiFormHelperText-root': {
    //     width: '120px',
    //     color: 'red',
    //     fontSize: '12px',
    //     marginLeft: '0px',
    //     marginBottom: '0px',
    //     padding: '0px',
    // },
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
    endAdornment,
    helperTextWidth
}) => {
    return (
        <FlexColumnContainer width='100%'>
            <StyledTextField
                {...register(name, validation)}
                error={!!error}
                variant="outlined"
                fullWidth
                placeholder={placeholder}
                type={type}
                InputProps={{
                    startAdornment: startAdornment && (
                        <InputAdornment position='start'>
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
            {helperText && (
                <FormHelperText
                    style={{ width: helperTextWidth ? helperTextWidth : '145px', color: 'red', fontSize: '12px', marginLeft: '0px', marginBottom: '0px' }}
                >
                    {helperText}
                </FormHelperText>
            )}
        </FlexColumnContainer>
    );
};

export default MUITextField;