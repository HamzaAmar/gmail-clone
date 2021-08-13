import React from 'react';
import { InputProps } from './input.type';

const input = ({ type, name }: InputProps) => {
  return (
    <label>
      <input type={type} name={name} />
    </label>
  );
};

export default input;
