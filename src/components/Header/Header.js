import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';

function Header({ handleBtnHeaderClick, children }) {

  return(
    <header className="header">
      <div className="header__container">
      <img src={logo} alt="Логотип" className="header__logo" />
      <button className="header__btn" onClick={handleBtnHeaderClick} ></button>
      {children}
      </div>
    </header>
  );
}

export default Header;
