import React, { useState } from 'react';
import AuthForm from '../../../../../components/common/AuthForm/AuthForm';
import { TextField as MuiTextField, InputAdornment, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MuiTelInput, classes as MuiTelInputClasses } from 'mui-tel-input';
import FlexRowContainer from '../../../../../components/common/FlexContainers/FlexRowContainer';
import { SubmitHandler, useForm } from 'react-hook-form';
import FlexColumnContainer from '../../../../../components/common/FlexContainers/FlexColumnContainer';

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


const MUITelInput = styled(MuiTelInput)(({ theme }) => ({
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
    padding: '0px'
  },
  '.MuiTelInput-flagButton': {
    backgroundColor: 'transparent',
    padding: '0px'
  },
  '.MuiTelInput-flagImg': {
    width: '18px',
    padding: '0px'
  },
  '.MuiTelInput-callingCode': {
    color: 'gray',
  },
}));

const cities = [
  'Bakı',
  'Gəncə',
  'Sumqayıt',
  'Lənkəran',
  'Mingəçevir',
  'Şirvan',
  'Şəki',
  'Lerik',
  'Quba',
  'Naftalan',
];

const ITEM_HEIGHT = 36;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};


const CandidateRegisterForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<CandidateRegisterFormFields>();
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const onSubmit: SubmitHandler<CandidateRegisterFormFields> = (data) => {
    console.log("Submitted data:", data);
  };

  return (
    <AuthForm formTitle='Qeydiyyat' onSubmit={handleSubmit(onSubmit)}>
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
        <FlexRowContainer gap='10px'>
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
          <FormControl variant="outlined" fullWidth sx={{ ...TextFieldExtraStyle, position: 'relative' }}>
            <Select
              {...register("city", { required: "Required" })}
              error={!!errors.city}
              defaultValue=""
              onChange={(event) => setValue("city", event.target.value)}
              displayEmpty
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <span style={{ color: '#A0A0A0' }}>Şəhər seçin</span>;
                }
                return selected;
              }}
              MenuProps={MenuProps}
              sx={{
                '& .MuiInputBase-input': {
                  fontSize: '14px',
                  color: 'black',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#E8E8E8',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#3575E2',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#3575E2',
                },
                '& .MuiFormHelperText-root': {
                  color: 'red',
                  fontSize: '12px',
                  marginLeft: '0px',
                  marginBottom: '5px',
                },
              }}
            >
              {cities.map((city) => (
                <MenuItem key={city} value={city} sx={{ fontSize: '14px'}}>
                  {city}
                </MenuItem>
              ))}
            </Select>
            {errors.city && (
              <span style={{ color: 'red', fontSize: '12px' }}>
                {errors.city.message}
              </span>
            )}
          </FormControl>
        </FlexRowContainer>
        <button type='submit'>Submit</button>
      </FlexColumnContainer>
    </AuthForm>
  );
};

export default CandidateRegisterForm;