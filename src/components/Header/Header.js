import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';
import { routers } from '../../utils/constans';

function Header({ handleBtnHeaderClick, children }) {
  const location = useLocation();

  function checkRouter(routers) {
    return routers.some((item) => item === location.pathname);
  }

  return(
    checkRouter(routers) ? (
      <header className="header">
      <div className="header__container">
      <img src={logo} alt="Логотип" className="header__logo" />
      <button className="header__btn" onClick={handleBtnHeaderClick} ></button>
      {children}
      </div>
    </header>
    ) : ''
  );
}

export default Header;
