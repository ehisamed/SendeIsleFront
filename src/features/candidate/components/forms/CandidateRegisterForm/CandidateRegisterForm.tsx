import React, { useState } from 'react';
import AuthForm from '../../../../../components/common/AuthForm/AuthForm';
import { TextField as MuiTextField, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MuiTelInput, classes as MuiTelInputClasses } from 'mui-tel-input'; // Импортируйте MuiTelInput и классы
import FlexRowContainer from '../../../../../components/common/FlexContainers/FlexRowContainer';
import { SubmitHandler, useForm } from 'react-hook-form';
import FlexColumnContainer from '../../../../../components/common/FlexContainers/FlexColumnContainer';
import PersonIcon from '@mui/icons-material/Person';

import { default as EmailIcon } from '@mui/icons-material/AlternateEmail';
import { default as PasswordIcon } from '@mui/icons-material/Password';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface CandidateRegisterFormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  city: string;
}

const MUITextField = styled(MuiTextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    fontSize: '14px',
    color: 'black',
  },

  '& label': {
    display: 'none',
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
}

// Стилизация MuiTelInput
const MUITelInput = styled(MuiTelInput)`
  & .${MuiTelInputClasses.textField} {
    font-size: 14px;
    color: black;
  }

  .${MuiTelInputClasses.flagButton} {
    background-color: transparent; 
  }

  .${MuiTelInputClasses.flagImg} {
    width: 20px; 
  }

  .${MuiTelInputClasses.callingCode} {
    color: gray; 
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #E8E8E8;
    }
    &.Mui-focused fieldset {
      border-color: black;
    }
  }
`;

const CandidateRegisterForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<CandidateRegisterFormFields>();
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const onSubmit: SubmitHandler<CandidateRegisterFormFields> = (data) => {
    console.log("Submitted data:", data);
  };

  return (
    <AuthForm formTitle='Qeydiyyат' onSubmit={handleSubmit(onSubmit)}>
      <FlexColumnContainer>
        <FlexRowContainer gap='10px'>
          <MUITextField
            {...register("firstName", { required: "Required" })}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            variant="outlined"
            fullWidth
            placeholder='Eldar'
            InputLabelProps={{
              shrink: true,
            }}
            sx={TextFieldExtraStyle}
          />
          <MUITextField
            {...register("lastName", { required: "Required" })}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            variant="outlined"
            fullWidth
            placeholder='Sabirli'
            InputLabelProps={{
              shrink: false,
            }}
            sx={TextFieldExtraStyle}
          />
        </FlexRowContainer>
        <MUITextField
          {...register("email", { required: "Required" })}
          error={!!errors.email}
          helperText={errors.email?.message}
          variant="outlined"
          fullWidth
          placeholder='email address'
          InputLabelProps={{
            shrink: false,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon fontSize='small' />
              </InputAdornment>
            ),
          }}
          sx={TextFieldExtraStyle}
        />
        <MUITextField
          {...register("password", { required: "Required" })}
          error={!!errors.password}
          helperText={errors.password?.message}
          variant="outlined"
          fullWidth
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          InputLabelProps={{
            shrink: false,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PasswordIcon fontSize='small' />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {showPassword ? <VisibilityOffIcon fontSize='small' /> : <VisibilityIcon fontSize='small' />}
                </span>
              </InputAdornment>
            ),
          }}
          sx={TextFieldExtraStyle}
        />
        <MUITelInput
          {...register("phoneNumber", { required: "Required" })}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
          variant="outlined"
          fullWidth
          placeholder='Phone Number'
          defaultCountry="AZ"
          onlyCountries={['AZ']}
          onChange={(value, info) => {
            setValue("phoneNumber", value);
          }}
          value={watch("phoneNumber")}
          sx={TextFieldExtraStyle}
        />
        <button type='submit'>Submit</button>
      </FlexColumnContainer>
    </AuthForm>
  );
};

export default CandidateRegisterForm;