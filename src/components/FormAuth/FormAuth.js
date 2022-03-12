import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './FormAuth.css';

function FormAuth({ formName }) {
  const location = useLocation();

  // Прототип для 4 этапа
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('invalid message');

  // Прототип для 4 этапа
  function handleChange(evt) {
    if(evt.target.name === 'name') {
      setName(evt.target.value);
    }
    if(evt.target.name === 'email') {
      setEmail(evt.target.value);
    }
    if(evt.target.name === 'password') {
      setPassword(evt.target.value);
    }
  }

  return(
    <form className={`form-auth form-auth_type_${formName}`} noValidate>
      {location.pathname === '/signup' && (
        <>
        <h3 className='form-auth__title-input'>Имя</h3>
        <input type='text' value={name} onChange={handleChange} className='form-auth__input' required></input>
        <span className='form-auth__input-error' id='name-input'></span>
        </>
      )}
      <h3 className='form-auth__title-input'>E-mail</h3>
      <input type='email' value={email} onChange={handleChange} className='form-auth__input' required></input>
      <span className='form-auth__input-error' id='email-input'></span>
      <h3 className='form-auth__title-input'>Пароль</h3>
      <input type='password' value={password} onChange={handleChange} className='form-auth__input form-auth__input_invalid' required></input>
      <span className='form-auth__input-error form-auth__input-error_active' id='password-input'>test message error</span>
      <button type='submit' className={`form-auth__submit-btn ${location.pathname === '/signin' && 'form-auth__submit-btn_place_signin'}`}>
        {location.pathname === '/signup' ? 'Зарегистрироваться' : 'Войти'}
      </button>
    </form>
  );
}

export default FormAuth;
