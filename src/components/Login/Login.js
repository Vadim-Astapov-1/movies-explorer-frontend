import React, { useEffect } from 'react';
import FormAuth from '../FormAuth/FormAuth';
import { Validation } from '../Validation/Validation';

function Login({ onLogin }) {
  let validation = Validation({});

  function handleSubmit(evt) {
    evt.preventDefault();

    console.log(validation.values)
    onLogin(validation.values.email, validation.values.password);
  }

  useEffect(() => {
    validation.resetForm();
  }, []);

  return(
    <FormAuth name='login' title='Рады видеть!' buttonText='Войти' subtitle='Ещё не зарегистрированы?' link='/signup' linkText='Регистрация' onSubmit={handleSubmit} valid={validation.isValid}>
      <label className='auth__title-input' htmlFor='login-email-input'>E-mail</label>
      <input type='email' onChange={validation.handleChange} className={`auth__input ${validation.errors.email ? 'auth__input_invalid' : ''}`} id='login-email-input' name='email' placeholder='Введите имя' required></input>
      <span className='auth__input-error' id='login-email-input-error'>{validation.errors.email}</span>
      <label className='auth__title-input' htmlFor='login-password-input'>Пароль</label>
      <input type='password' onChange={validation.handleChange} className={`auth__input ${validation.errors.password ? 'auth__input_invalid' : ''}`} id='login-password-input' name='password' placeholder='Введите пароль' required></input>
      <span className='auth__input-error' id='login-password-input-error'>{validation.errors.password}</span>
    </FormAuth>
  );
}

export default Login;
