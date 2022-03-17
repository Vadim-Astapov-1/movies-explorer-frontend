import React from 'react';
import Link from 'react-scroll/modules/components/Link';
import './NavTab.css';

function NavTab() {

  return(
    <nav className='nav-tab'>
      <Link className='nav-tab__link' to='about-project' smooth={true} duration={800}>Узнать больше</Link>
    </nav>
  );
}

export default NavTab;
