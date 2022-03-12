import React from 'react';
import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register({ children }) {

  return(
    <section className='register'>
      <Link to="/" className='logo register__logo'><img src={logo} alt='Логотип' /></Link>
      <h2 className='register__title'>Добро пожаловать!</h2>
      {children}
      <p className='register__subtitle'>Уже зарегистрированы? <Link to='/signin' className='register__login-link'>Войти</Link></p>
    </section>
  );
}

export default Register;
