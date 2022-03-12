import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login({ children }) {
  return(
    <section className='login'>
      <img src={logo} alt='Логотип' className='login__logo'></img>
      <h2 className='login__title'>Рады видеть!</h2>
      {children}
      <p className='login__subtitle'>Ещё не зарегистрированы? <Link to='/signup' className='login__register-link'>Регистрация</Link></p>
    </section>
  );
}

export default Login;
