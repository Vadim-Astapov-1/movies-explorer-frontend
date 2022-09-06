import React from 'react';
import './Promo.css';
import promoImg from '../../images/landing-logo.png';
import NavTab from '../NavTab/NavTab';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <img src={promoImg} alt='Изображение шара' className='promo__image'></img>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <p className='promo__subtitle'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <NavTab />
      </div>
    </section>
  );
}

export default Promo;
