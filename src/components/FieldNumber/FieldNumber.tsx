import React from 'react';
import s from './FieldNumber.module.css';

type FieldNumberProps = {
  id: string
  label: string
  min: number
  defaultValue: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputExtraClass?: string
}

const FieldNumber: React.FC<FieldNumberProps> = (
  {
    id,
    min,
    label,
    defaultValue,
    inputExtraClass,
    onChange,
  }) => {

  return (
    <div className={s.inputGroup}>
      <label className={s.label} htmlFor={id}>{label}:</label>
      <input
        className={`${inputExtraClass}`}
        id={id}
        type="number"
        min={min}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  )
}

export default FieldNumber