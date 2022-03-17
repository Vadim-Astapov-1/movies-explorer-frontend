import React from 'react';
import FormAuth from '../FormAuth/FormAuth';

function Register() {

  return(
    <FormAuth name='register' title='Добро пожаловать!' buttonText='Зарегистрироваться' subtitle='Уже зарегистрированы?' link='/signin' linkText='Войти'>
      <label className='auth__title-input' htmlFor='register-name-input'>Имя</label>
      <input type='text' className='auth__input' id='register-name-input' name='name' placeholder='Введите имя' minLength='2' maxLength='30' required></input>
      <span className='auth__input-error' id='register-name-input-error'></span>
      <label className='auth__title-input' htmlFor='register-email-input'>E-mail</label>
      <input type='email' className='auth__input' id='register-email-input' name='email' placeholder='Введите адрес электронной почты' required></input>
      <span className='auth__input-error' id='register-email-input-error'></span>
      <label className='auth__title-input' htmlFor='register-password-input'>Пароль</label>
      <input type='password' defaultValue='testvalue' className='auth__input auth__input_invalid' id='register-password-input' name='password' placeholder='Введите пароль' required></input>
      <span className='auth__input-error auth__input-error_active' id='register-password-input-error'>test message error</span>
    </FormAuth>
  );
}

export default Register;
