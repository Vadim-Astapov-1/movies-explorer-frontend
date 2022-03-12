import React from 'react';
import { useLocation } from 'react-router-dom';
import { footerRouters } from '../../utils/constans';
import './Footer.css';

function Footer({ children }) {
  const location = useLocation();

  function checkRouter(routers) {
    return routers.some((item) => item === location.pathname);
  }

  return(
    checkRouter(footerRouters) ? (
      <footer className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__container'>
        <p className='footer__copyright'>&copy; 2022</p>
        {children}
      </div>
    </footer>
    ) : ''
  );
}

export default Footer;
