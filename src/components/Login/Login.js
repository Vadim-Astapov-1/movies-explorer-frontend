import React, { useState } from 'react';
import FormAuth from '../FormAuth/FormAuth';
import { Validation } from '../Validation/Validation';

function Login({ onLogin, reqError }) {
  let validation = Validation({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleChangeLogin(evt) {
    validation.handleChange(evt);

    if(evt.target.name === 'email') {
      setEmail(evt.target.value)
    }

    if(evt.target.name === 'password') {
      setPassword(evt.target.value);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onLogin(email, password);
    validation.resetForm();
  }

  return(
    <FormAuth name='login' title='Рады видеть!' buttonText='Войти' subtitle='Ещё не зарегистрированы?' link='/signup' linkText='Регистрация' onSubmit={handleSubmit} authError={reqError} valid={validation.isValid}>
      <label className='auth__title-input' htmlFor='login-email-input'>E-mail</label>
      <input type='email'  value={email} onChange={handleChangeLogin} className={`auth__input ${validation.errors.email ? 'auth__input_invalid' : ''}`} id='login-email-input' name='email' placeholder='Введите имя' required></input>
      <span className='auth__input-error' id='login-email-input-error'>{validation.errors.email}</span>
      <label className='auth__title-input' htmlFor='login-password-input'>Пароль</label>
      <input type='password'  value={password} onChange={handleChangeLogin} className={`auth__input ${validation.errors.password ? 'auth__input_invalid' : ''}`} id='login-password-input' name='password' placeholder='Введите пароль' required></input>
      <span className='auth__input-error' id='login-password-input-error'>{validation.errors.password}</span>
    </FormAuth>
  );
}

export default Login;
