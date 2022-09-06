import React from 'react';
import { useLocation } from 'react-router-dom';
import { footerRouters } from '../../utils/constans';
import './Footer.css';

function Footer() {
  const location = useLocation();

  function checkRouter(routers) {
    return routers.some((item) => item === location.pathname);
  }

  return (
    checkRouter(footerRouters) && (
      <footer className='footer'>
        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__container'>
          <p className='footer__copyright'>&copy; 2022</p>
          <nav className='footer__nav'>
            <a href='https://practicum.yandex.ru' className='footer__link' target='_blank'>
              Яндекс.Практикум
            </a>
            <a
              href='https://github.com/Vadim-Astapov-1?tab=repositories'
              className='footer__link'
              target='_blank'
            >
              Github
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=100021774372638'
              className='footer__link'
              target='_blank'
            >
              Facebook
            </a>
          </nav>
        </div>
      </footer>
    )
  );
}

export default Footer;
