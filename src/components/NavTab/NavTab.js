import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavTab.css';

function NavTab({ loggedIn, handleBtnNavClick }) {
  const location = useLocation();

  return(
    <nav className='menu'>
    {!loggedIn ? (
      <>
      <Link to="/signup" className="menu__link-landing">Регистрация</Link>
      <Link to="/signin" className="menu__link-landing menu__link-ladning_type_btn">Войти</Link>
      </>
    ) : (
      <>
      <Link to="/movies" className="menu__link">Фильмы</Link>
      <Link to="/saved-movies" className="menu__link menu__link_font_regular">Сохранённые фильмы</Link>
      <Link to="/profile" className="menu__link-btn">Аккаунт</Link>
      <button className="menu__btn" onClick={handleBtnNavClick}></button>
      </>
    )}
    </nav>
  );
}

export default NavTab;
