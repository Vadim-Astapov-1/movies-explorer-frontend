import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isHidden, handleBtnNavClick }) {
  const location = useLocation();

  return(
    <nav className={`sidebar-menu ${!isHidden ? 'sidebar-menu_type_visible' : ''}`} onClick={handleBtnNavClick}>
      <div className={`sidebar-menu__container ${!isHidden ? 'sidebar-menu__container_type_visible' : ''}`}>
        <Link to='/' className={`sibebar-menu__link ${location.pathname === '/' ? 'sibebar-menu__link_place_hier' : ''}`}>Главная</Link>
        <Link to='/movies' className={`sibebar-menu__link ${location.pathname === '/movies' ? 'sibebar-menu__link_place_hier' : ''}`}>Фильмы</Link>
        <Link to='/saved-movies' className={`sibebar-menu__link ${location.pathname === '/saved-movies' ? 'sibebar-menu__link_place_hier' : ''}`}>Сохранённые фильмы</Link>
        <Link to='/profile' className='sibebar-menu__link-btn'>Аккаунт</Link>
        <button className='sibebar-menu__close-btn' onClick={handleBtnNavClick}></button>
      </div>
    </nav>
  );
}

export default Navigation;
