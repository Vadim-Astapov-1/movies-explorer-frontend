import React from 'react';
import './Navigation.css';

function Navigation() {
  return(
    <nav className='navigation'>
      <a href='https://practicum.yandex.ru' className='navigation__link' target='_blank'>Яндекс.Практикум</a>
      <a href='https://github.com/Vadim-Astapov-1?tab=repositories' className='navigation__link' target='_blank'>Github</a>
      <a href='https://www.facebook.com/profile.php?id=100021774372638' className='navigation__link' target='_blank'>Facebook</a>
    </nav>
  );
}

export default Navigation;
