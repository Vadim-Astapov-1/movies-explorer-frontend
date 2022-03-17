import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './FormAuth.css';
import logo from '../../images/logo.svg';

function FormAuth({ name, title, buttonText, subtitle, link, linkText, children }) {
  const location = useLocation();

  return(
    <section className={`auth auth_type_${name}`}>
      <Link to="/" className='logo auth__logo'><img src={logo} alt='Логотип' /></Link>
      <h2 className='auth__title'>{title}</h2>
      <form className={`auth__form auth__form_type_${name}`} noValidate>
        {children}
        <button type='submit' className={`auth__submit-btn ${location.pathname === '/signin' && 'auth__submit-btn_place_login'}`}>{buttonText}</button>
      </form>
      <p className='auth__subtitle'>{subtitle} <Link to={link} className='auth__link'>{linkText}</Link></p>
    </section>
  );
}

export default FormAuth;
