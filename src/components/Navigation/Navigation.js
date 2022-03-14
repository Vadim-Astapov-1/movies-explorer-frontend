import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation({ loggedIn, handleBtnNavClick }) {
  const location = useLocation();

  // После ревью заменить location.pathname на !loggedIn, чтобы на главной странице
  // авторизированный пользователь видел ссылки на фильмы.
  return(
    <nav className='navigation'>
    {location.pathname === '/' ? (
      <>
      <Link to="/signup" className="navigation__link-landing">Регистрация</Link>
      <Link to="/signin" className="navigation__link-landing navigation__link-ladning_type_btn">Войти</Link>
      </>
    ) : (
      <>
      <Link to="/movies" className="navigation__link">Фильмы</Link>
      <Link to="/saved-movies" className="navigation__link navigation__link_font_regular">Сохранённые фильмы</Link>
      <Link to="/profile" className="navigation__link-btn">Аккаунт</Link>
      <button className="navigation__btn" onClick={handleBtnNavClick}></button>
      </>
    )}
    {}
    </nav>
  );
}

export default Navigation;
