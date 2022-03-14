import React from 'react';
import './AboutMe.css';
import studentImg from '../../images/student.png';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {

  return(
    <section className='about-me'>
      <h2 className='section-title about-me__title'>Студент</h2>
      <img src={studentImg} alt='Изображение студента' className='about-me__image'></img>
      <p className='about-me__student'>Виталий</p>
      <p className='about-me__status'>Фронтенд-разработчик, 30 лет</p>
      <p className='about-me__description'>
        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
        начал заниматься фриланс-заказами и ушёл с постоянной работы.
      </p>
      <ul className='about-me__links'>
        <li><a href='https://www.facebook.com/profile.php?id=100021774372638' className='about-me__link' target='_blank'>Facebook</a></li>
        <li><a href='https://github.com/Vadim-Astapov-1?tab=repositories' className='about-me__link' target='_blank'>Github</a></li>
      </ul>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
