import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavTab.css';

function NavTab({ isHidden }) {
  const location = useLocation();

  const routes = ['/movies', '/saved-movies', '/profile'];

  function checkRouter(routes) {
    return routes.some((item) => item === location.pathname);
  }

  return(
    <nav className={`menu ${isHidden ? '' : 'menu_type_visible'}`}>
    {location.pathname === '/about-project' && (
      <>
      <Link to="/signup" className="menu__link-landing">Регистрация</Link>
      <Link to="/signin" className="menu__link-landing menu__link-ladning_type_btn">Войти</Link>
      </>
    )}
    {checkRouter(routes) && (
      <>
      <Link to="/movies" className="menu__link">Фильмы</Link>
      <Link to="/saved-movies" className="menu__link menu__link_font_regular">Сохранённые фильмы</Link>
      <Link to="/profile" className="menu__link-btn">Аккаунт</Link>
      </>
    )}
    </nav>
  );
}

export default NavTab;
