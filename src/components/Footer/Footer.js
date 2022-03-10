import React from 'react';
import './Footer.css';

function Footer({ children }) {

  return(
    <footer className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__container'>
        <p className='footer__copyright'>&copy; 2022</p>
        {children}
      </div>
    </footer>
  );
}

export default Footer;
