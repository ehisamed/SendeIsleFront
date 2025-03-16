import React, { useState } from 'react';
import AuthForm from '../../../../../components/common/AuthForm/AuthForm';
import FlexRowContainer from '../../../../../components/ui/FlexContainers/FlexRowContainer';
import { SubmitHandler, useForm } from 'react-hook-form';
import FlexColumnContainer from '../../../../../components/ui/FlexContainers/FlexColumnContainer';
import style from './register.style.module.scss'

import { default as EmailIcon } from '@mui/icons-material/AlternateEmail';
import { default as PasswordIcon } from '@mui/icons-material/Password';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MUITextField from '../../../../../components/common/MUI/MUITextField';
import MUITelInput from '../../../../../components/common/MUI/MUITelInput';
import MUISelect from '../../../../../components/common/MUI/MUISelect';
import BaseButton from '../../../../../components/ui/Buttons/BaseButton';
import { images } from '../../../../../assets/images';
import { REQUIRED_MESSAGE, 
  FIRST_LAST_NAME_PATTERN_MESSAGE, 
  FIRST_LAST_NAME_FIRST_LETTER_UPPERCASE_MESSAGE,
  MIN_PASSWORD_MESSAGE,
  MAX_PASSWORD_MESSAGE,
  FIRST_LAST_NAME_MIN_MESSAGE,
  FIRST_LAST_NAME_MAX_MESSAGE
} from './service/validationService';

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
    <AuthForm
      formTitle='Qeydiyyat'
      onSubmit={handleSubmit(onSubmit)}
      hasBack={true}
      backTo='/'
      backInner={<ArrowBackIcon />}
      headImg={images.compLogo}
      flexShrik='0'
    >
      <FlexColumnContainer>
        <FlexRowContainer gap='10px' align='flex-start'>
          <MUITextField
            register={register}
            name="firstName"
            error={errors.firstName}
            helperText={errors.firstName?.message}
            placeholder='Ad'
            validation={{
              required: REQUIRED_MESSAGE,
              pattern: {
                value: /^[A-Za-zА-Яа-яЁё]+$/,
                message: FIRST_LAST_NAME_PATTERN_MESSAGE
              },
              validate: {
                firstLetterUppercase: (value: string) => /^[A-ZА-Я]/.test(value) || FIRST_LAST_NAME_FIRST_LETTER_UPPERCASE_MESSAGE
              },
              minLength: { value: 2, message: FIRST_LAST_NAME_MIN_MESSAGE},
              maxLength: { value: 30, message: FIRST_LAST_NAME_MAX_MESSAGE }
            }}
          />
          <MUITextField
            register={register}
            name="lastName"
            error={errors.lastName}
            helperText={errors.lastName?.message}
            placeholder='Soy Ad'
            validation={{
              required: REQUIRED_MESSAGE,
              pattern: {
                value: /^[A-Za-zА-Яа-яЁё]+$/,
                message: FIRST_LAST_NAME_PATTERN_MESSAGE
              },
              validate: {
                firstLetterUppercase: (value: string) => /^[A-ZА-Я]/.test(value) || FIRST_LAST_NAME_FIRST_LETTER_UPPERCASE_MESSAGE
              },
              minLength: { value: 2, message: FIRST_LAST_NAME_MIN_MESSAGE },
              maxLength: { value: 30, message: FIRST_LAST_NAME_MAX_MESSAGE }
            }}
          />
        </FlexRowContainer>
        <MUITextField
          register={register}
          name="email"
          error={errors.email}
          helperText={errors.email?.message}
          helperTextWidth='100%'
          placeholder='E-poçt ünvanı'
          startAdornment={<EmailIcon fontSize='small' />}
          validation={{
            required: REQUIRED_MESSAGE,
            validate: {
              minLength: (value: string) => value.split('@')[0].length >= 6 || "E-poçt ünvanı '@' simvolundan əvvəl ən azı 6 simvol olmalıdır",
              maxLength: (value: string) => value.split('@')[0].length <= 12 || "E-poçt ünvanı '@' simvolundan əvvəl 12 simvoldan çox olmamalıdır",
              pattern: (value: string) => /^[A-Za-z0-9._%+-]{6,12}@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(value) || "E-poçt ünvanı düzgün formatda olmalıdır"
            }
          }}
        />
        <MUITextField
          register={register}
          name="password"
          error={errors.password}
          helperText={errors.password?.message}
          helperTextWidth='100%'
          placeholder='Şifrə'
          type={showPassword ? 'text' : 'password'}
          startAdornment={<PasswordIcon fontSize='small' />}
          endAdornment={
            <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {showPassword ? <VisibilityOffIcon fontSize='small' /> : <VisibilityIcon fontSize='small' />}
            </span>
          }
          validation={{
            required: REQUIRED_MESSAGE,
            minLength: { value: 6, message: MIN_PASSWORD_MESSAGE },
            maxLength: { value: 12, message: MAX_PASSWORD_MESSAGE },
            validate: {
              twoDigits: (value: string) => (value.match(/\d/g) || []).length >= 2 || "Şifrə ən azı 2 rəqəm içerməlidir",
              underscore: (value: string) => /_/.test(value) || "Şifrə ən azı 1 '_' simvolu içerməlidir"
            },
          }}
        />
        <FlexRowContainer gap='10px' align='flex-start'>
          <MUITelInput
            register={register}
            name="phoneNumber"
            error={errors.phoneNumber}
            clearErrors={clearErrors}
            helperText={errors.phoneNumber?.message}
            helperTextWidth='120px'
            setValue={setValue}
            watch={watch}
            validation={{
              required: REQUIRED_MESSAGE
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
              required: REQUIRED_MESSAGE
            }}
          />
        </FlexRowContainer>
        <BaseButton padding='12px 12px'>Qeydiyyatdan keç</BaseButton>
        <p className={style['form-redirect']}>Əgər hesabınız varsa, <a href="/candidate/login" className={style['form-redirect-link']}>Daxil olun.</a></p>
      </FlexColumnContainer>
    </AuthForm>
  );
};

export default CandidateRegisterForm;