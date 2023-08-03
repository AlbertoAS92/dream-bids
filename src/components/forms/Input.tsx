import './Input.css';
import React, { SyntheticEvent } from 'react';
import { InputType } from 'zlib';

export const Input = ({
  inputType,
  register,
  controlName,
  label,
  options,
  placeholder,
}: any) => {
  const Input = (
    <input
      className="w-full p-2 bg-gray-50 border border-gray-400 rounded-sm"
      type={inputType}
      placeholder={placeholder || `${inputType}`}
      {...register(controlName, {
        ...options,
        onChange: (e: any) => {
          console.log(e.target.value);
        },
      })}
    />
  );

  if (label) {
    return (
      <label
        className="flex flex-col gap-1 font-medium text-sm"
        htmlFor={controlName}
      >
        {label}
        {Input}
      </label>
    );
  }

  return <>{Input}</>;
};
