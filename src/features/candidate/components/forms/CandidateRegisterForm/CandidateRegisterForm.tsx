import React, { useState } from 'react';
import AuthForm from '../../../../../components/common/AuthForm/AuthForm';
import FlexRowContainer from '../../../../../components/ui/FlexContainers/FlexRowContainer';
import { SubmitHandler, useForm } from 'react-hook-form';
import FlexColumnContainer from '../../../../../components/ui/FlexContainers/FlexColumnContainer';

import { default as EmailIcon } from '@mui/icons-material/AlternateEmail';
import { default as PasswordIcon } from '@mui/icons-material/Password';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MUITextField from '../../../../../components/common/MUI/MUITextField';
import MUITelInput from '../../../../../components/common/MUI/MUITelInput';
import MUISelect from '../../../../../components/common/MUI/MUISelect';
import BaseButton from '../../../../../components/ui/Buttons/BaseButton';

interface CandidateRegisterFormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  city: string;
}

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


const CandidateRegisterForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue, watch, clearErrors } = useForm<CandidateRegisterFormFields>();
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const onSubmit: SubmitHandler<CandidateRegisterFormFields> = (data) => {
    console.log("Submitted data:", data);
  };

  return (
    <AuthForm formTitle='Qeydiyyat' onSubmit={handleSubmit(onSubmit)} hasBack={true} backTo='/' backInner={<ArrowBackIcon />}>
      <FlexColumnContainer>
        <FlexRowContainer gap='10px'>
          <MUITextField
            register={register}
            name="firstName"
            error={errors.firstName}
            helperText={errors.firstName?.message}
            placeholder='Ad'
            validation={{
              required: "Required",
              minLength: { value: 2, message: " минимум 2 символа" },
              maxLength: { value: 30, message: "30 символов" }
            }}
          />
          <MUITextField
            register={register}
            name="lastName"
            error={errors.lastName}
            helperText={errors.lastName?.message}
            placeholder='Soy Ad'
            validation={{
              required: "Required",
              minLength: { value: 2, message: "минимум 2 символа" },
              maxLength: { value: 30, message: "30 символов" }
            }}
          />
        </FlexRowContainer>
        <MUITextField
          register={register}
          name="email"
          error={errors.email}
          helperText={errors.email?.message}
          placeholder='email address'
          startAdornment={<EmailIcon fontSize='small' />}
          validation={{
            required: "Required",
            minLength: { value: 2, message: "минимум 2 символа" },
            maxLength: { value: 30, message: "30 символов" }
          }}
        />
        <MUITextField
          register={register}
          name="password"
          error={errors.password}
          helperText={errors.password?.message}
          placeholder='password'
          type={showPassword ? 'text' : 'password'}
          startAdornment={<PasswordIcon fontSize='small' />}
          endAdornment={
            <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {showPassword ? <VisibilityOffIcon fontSize='small' /> : <VisibilityIcon fontSize='small' />}
            </span>
          }
          validation={{
            required: "Required",
            minLength: { value: 2, message: "минимум 2 символа" },
            maxLength: { value: 30, message: "30 символов" }
          }}
        />
        <FlexRowContainer gap='10px'>
          <MUITelInput
            register={register}
            name="phoneNumber"
            error={errors.phoneNumber}
            clearErrors={clearErrors}
            helperText={errors.phoneNumber?.message}
            setValue={setValue}
            watch={watch}
            validation={{
              required: "Required"
            }}
          />
          <MUISelect
            register={register}
            name="city"
            error={errors.city}
            clearErrors={clearErrors}
            helperText={errors.city?.message}
            cities={cities}
            setValue={setValue}
            validation={{
              required: "Required",
              minLength: { value: 2, message: "минимум 2 символа" },
              maxLength: { value: 30, message: "30 символов" }
            }}
          />
        </FlexRowContainer>
        <BaseButton padding='12px 12px'>Qeydiyyatdan keç</BaseButton>
      </FlexColumnContainer>
    </AuthForm>
  );
};

export default CandidateRegisterForm;