export const validateRequired = (value: string) => (value ? undefined : "Mütləq doldurulmalı xana");

export const REQUIRED_MESSAGE: string = 'Mütləq doldurulmalı xana'
export const FIRST_LAST_NAME_PATTERN_MESSAGE: string = 'Yalnız latın və kiril hərfləri istifadə edilməlidir'
export const FIRST_LAST_NAME_FIRST_LETTER_UPPERCASE_MESSAGE: string = "İlk hərf böyük olmalıdır"
export const FIRST_LAST_NAME_MIN_MESSAGE = 'Ən azı 2 simvol olmalıdır'
export const FIRST_LAST_NAME_MAX_MESSAGE = '30 simvoldan çox olmamalıdır'
export const MIN_PASSWORD_MESSAGE: string = 'Ən azı 6 simvol olmalıdır'
export const MAX_PASSWORD_MESSAGE: string = '12 simvoldan çox olmamalıdır'

export const minLength = (min: number) => (value: string) =>
    value.length >= min ? undefined : `минимум ${min} символа`;

export const maxLength = (max: number) => (value: string) =>
    value.length <= max ? undefined : `${max} символов`;