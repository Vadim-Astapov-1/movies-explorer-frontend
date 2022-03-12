import React from 'react';
import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register({ children }) {

  return(
    <section className='register'>
      <img src={logo} alt='Логотип' className='register__logo'></img>
      <h2 className='register__title'>Добро пожаловать!</h2>
      {children}
      <p className='register__subtitle'>Уже зарегистрированы? <Link to='/signin' className='register__login-link'>Войти</Link></p>
    </section>
  );
}

export default Register;
