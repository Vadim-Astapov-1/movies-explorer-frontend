import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login({ children }) {
  return(
    <section className='login'>
      <Link to="/" className='logo login__logo'><img src={logo} alt='Логотип' /></Link>
      <h2 className='login__title'>Рады видеть!</h2>
      {children}
      <p className='login__subtitle'>Ещё не зарегистрированы? <Link to='/signup' className='login__register-link'>Регистрация</Link></p>
    </section>
  );
}

export default Login;
