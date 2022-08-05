import React from 'react';
import './Portfolio.css';

function Portfolio() {

  return(
    <div className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <div className='portfolio__links'>
        <a href='https://vadim-astapov-1.github.io/how-to-learn/' className='portfolio__link' target='_blank'>Статичный сайт</a>
        <a href='https://vadim-astapov-1.github.io/travel-in-russian/' className='portfolio__link' target='_blank'>Адаптивный сайт</a>
        <a href='https://vadim-astapov-1.github.io/react-mesto-auth/index.html' className='portfolio__link' target='_blank'>Одностраничное приложение</a>
      </div>
    </div>
  );
}

export default  Portfolio;
