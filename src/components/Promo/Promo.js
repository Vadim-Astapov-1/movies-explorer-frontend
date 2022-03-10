import React from 'react';
import './Promo.css';
import promoImg from '../../images/landing-logo.png';
import Link from 'react-scroll/modules/components/Link';

function Promo() {
  return(
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__title'>Учебный проект студента факультета<br></br> Веб-разработки.</h1>
        <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <Link className='promo__btn' to='about-project' smooth={true} duration={800}>Узнать больше</Link>
        <img src={promoImg} alt='Изображение шара' className='promo__image'></img>
      </div>
    </section>
  );
}

export default Promo;
