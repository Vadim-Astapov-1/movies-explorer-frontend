import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return(
    <div className='error-page'>
      <h2 className='error-page__title'>404</h2>
      <p className='error-page__subtitle'>Страница не найдена</p>
      <Link to='/about-project' className='error-page__link'>назад</Link>
    </div>
  );
}

export default NotFound;
