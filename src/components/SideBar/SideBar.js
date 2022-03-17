import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SideBar.css';

function SideBar({ isHidden, handleBtnNavClick, onOutSideClick }) {
  const location = useLocation();

  return(
    <nav className={`sidebar-menu ${!isHidden ? 'sidebar-menu_type_visible' : ''}`} onClick={onOutSideClick}>
      <div className={`sidebar-menu__container ${!isHidden ? 'sidebar-menu__container_type_visible' : ''}`}>
        <Link to='/' className={`sidebar-menu__link ${location.pathname === '/' ? 'sidebar-menu__link_place_hier' : ''}`}>Главная</Link>
        <Link to='/movies' className={`sidebar-menu__link ${location.pathname === '/movies' ? 'sidebar-menu__link_place_hier' : ''}`}>Фильмы</Link>
        <Link to='/saved-movies' className={`sidebar-menu__link ${location.pathname === '/saved-movies' ? 'sidebar-menu__link_place_hier' : ''}`}>Сохранённые фильмы</Link>
        <Link to='/profile' className='sidebar-menu__link-btn'>Аккаунт</Link>
        <button className='sidebar-menu__close-btn' onClick={handleBtnNavClick}></button>
      </div>
    </nav>
  );
}

export default SideBar;
