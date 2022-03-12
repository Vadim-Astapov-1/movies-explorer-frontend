import React from 'react';
import { useLocation } from 'react-router-dom';
import './FormAuth.css';

function FormAuth({ formName }) {
  const location = useLocation();

  // Прототип для 4 этапа
  //const [name, setName] = useState('');
  //const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');

  // Прототип для 4 этапа
  function handleChange(evt) {
    if(evt.target.name === 'name') {
      //setName(evt.target.value);
    }
    if(evt.target.name === 'email') {
      //setEmail(evt.target.value);
    }
    if(evt.target.name === 'password') {
      //setPassword(evt.target.value);
    }
  }

  return(
    <form className={`form-auth form-auth_type_${formName}`} noValidate>
      {location.pathname === '/signup' && (
        <>
        <label className='form-auth__title-input' htmlFor='auth-name-input'>Имя</label>
        <input type='text' onChange={handleChange} className='form-auth__input' id='auth-name-input' name='name' minLength='2' maxLength='30' required></input>
        <span className='form-auth__input-error' id='auth-name-input-error'></span>
        </>
      )}
      <label className='form-auth__title-input' htmlFor='auth-email-input'>E-mail</label>
      <input type='email' onChange={handleChange} className='form-auth__input' id='auth-email-input' name='email' required></input>
      <span className='form-auth__input-error' id='auth-email-input-error'></span>
      <label className='form-auth__title-input' htmlFor='auth-password-input'>Пароль</label>
      <input type='password' defaultValue='testvalue' onChange={handleChange} className='form-auth__input form-auth__input_invalid' id='auth-password-input' name='password' required></input>
      <span className='form-auth__input-error form-auth__input-error_active' id='auth-password-input-error'>test message error</span>
      <button type='submit' className={`form-auth__submit-btn ${location.pathname === '/signin' && 'form-auth__submit-btn_place_signin'}`}>
        {location.pathname === '/signup' ? 'Зарегистрироваться' : 'Войти'}
      </button>
    </form>
  );
}

export default FormAuth;
