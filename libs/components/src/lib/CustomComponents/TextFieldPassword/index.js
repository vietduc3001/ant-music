import { Input } from 'antd';
import React from 'react';
import { InputContainer } from './index.styled';

const TextField = ({ label = '', name = '', value = '' }) => {
  return (
    <InputContainer class='form-input'>
      <Input
        type='password'
        placeholder={label}
        className='form__field'
        id={name}
      />
      <label className='form__label' for={name}>
        {label}
      </label>
    </InputContainer>
  );
};

export default TextField;
