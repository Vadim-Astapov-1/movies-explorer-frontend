import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';
import { headerRouters } from '../../utils/constans';

function Header({ handleBtnHeaderClick, children }) {
  const location = useLocation();

  function checkRouter(routers) {
    return routers.some((item) => item === location.pathname);
  }

  return(
    checkRouter(headerRouters) ? (
      <header className={`header ${location.pathname === '/' ? 'header_color_dark-blue' : ''}`}>
      <div className="header__container">
      <Link to="/" className='logo header__logo'><img src={logo} alt="Логотип" /></Link>
      {location.pathname === '/' ? '' : <button className="header__btn" onClick={handleBtnHeaderClick} ></button>}
      {children}
      </div>
    </header>
    ) : ''
  );
}

export default Header;
