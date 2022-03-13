import React from 'react';
import FormAuth from '../FormAuth/FormAuth';

function Login() {

  return(
    <FormAuth name='login' title='Рады видеть!' buttonText='Войти' subtitle='Ещё не зарегистрированы?' link='/signup' linkText='Регистрация'>
      <label className='auth__title-input' htmlFor='login-email-input'>E-mail</label>
      <input type='email' className='auth__input' id='login-email-input' name='email' required></input>
      <span className='auth__input-error' id='login-email-input-error'></span>
      <label className='auth__title-input' htmlFor='login-password-input'>Пароль</label>
      <input type='password' defaultValue='testvalue' className='auth__input auth__input_invalid' id='login-password-input' name='password' required></input>
      <span className='auth__input-error auth__input-error_active' id='login-password-input-error'>test message error</span>
    </FormAuth>
  );
}

export default Login;
