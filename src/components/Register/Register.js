import React, { useEffect } from 'react';
import FormAuth from '../FormAuth/FormAuth';
import { Validation } from '../Validation/Validation';

function Register() {
  let validation = Validation();

  useEffect(() => {
    validation.resetForm();
  }, []);

  return(
    <FormAuth name='register' title='Добро пожаловать!' buttonText='Зарегистрироваться' subtitle='Уже зарегистрированы?' link='/signin' linkText='Войти' valid={validation.isValid}>
      <label className='auth__title-input' htmlFor='register-name-input'>Имя</label>
      <input type='text' onChange={validation.handleChange} className={`auth__input ${validation.errors.name ? 'auth__input_invalid' : ''}`} id='register-name-input' name='name' placeholder='Введите имя' minLength='2' maxLength='30' required></input>
      <span className='auth__input-error' id='register-name-input-error'>{validation.errors.name}</span>
      <label className='auth__title-input' htmlFor='register-email-input'>E-mail</label>
      <input type='email' onChange={validation.handleChange} className={`auth__input ${validation.errors.email ? 'auth__input_invalid' : ''}`} id='register-email-input' name='email' placeholder='Введите адрес электронной почты' required></input>
      <span className='auth__input-error' id='register-email-input-error'>{validation.errors.email}</span>
      <label className='auth__title-input' htmlFor='register-password-input'>Пароль</label>
      <input type='password' onChange={validation.handleChange} className={`auth__input ${validation.errors.password ? 'auth__input_invalid' : ''}`} id='register-password-input' name='password' placeholder='Введите пароль' required></input>
      <span className='auth__input-error' id='register-password-input-error'>{validation.errors.password}</span>
    </FormAuth>
  );
}

export default Register;
