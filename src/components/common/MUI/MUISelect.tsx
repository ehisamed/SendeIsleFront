import React from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import { UseFormRegister, FieldError, UseFormSetValue, FieldValues, Path } from 'react-hook-form';

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

interface MUISelectProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  error?: FieldError;
  cities: string[];
  setValue: UseFormSetValue<T>;
  validation?: any;
}

const TextFieldExtraStyle = {
    mt: '10px',
    fontSize: '12px',
    '& .MuiInputBase-input': {
        paddingBlock: '6px 6px',
        '&:focus': {
            outline: 'none',
            boxShadow: 'none',
        },
    },
};

const MUISelect = <T extends FieldValues>({
  register,
  name,
  error,
  cities,
  setValue,
  validation
}: MUISelectProps<T>) => {
  return (
    <FormControl variant="outlined" fullWidth sx={TextFieldExtraStyle}>
      <Select
        {...register(name, validation)}
        error={!!error}
        defaultValue=""
        onChange={(event) => setValue(name, event.target.value as any)}
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
        }}
      >
        {cities.map((city) => (
          <MenuItem key={city} value={city} sx={{ fontSize: '14px' }}>
            {city}
          </MenuItem>
        ))}
      </Select>
      {error && (
        <span style={{ color: 'red', fontSize: '12px' }}>
          {error.message}
        </span>
      )}
    </FormControl>
  );
};

export default MUISelect;