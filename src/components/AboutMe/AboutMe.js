import React from 'react';
import './AboutMe.css';
import studentImg from '../../images/mein-foto.jpg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return(
    <section className='about-me'>
      <h2 className='section-title about-me__title'>Студент</h2>
      <img src={studentImg} alt='Изображение студента' className='about-me__image'></img>
      <p className='about-me__student'>Вадим</p>
      <p className='about-me__status'>Фронтенд-разработчик, 20 лет</p>
      <p className='about-me__description'>
        Живу в Москве, 5 лет учился за границей. Закончил курс Яндекс.практикум на специальность фронтенд-разработчика.
        Люблю слушать музыку и читать книги. Обожаю верстку, потому что с ней чувствуешь себя частично художником, которому ещё многое предстоит написать.
        Ведь мир разработки ограничивается лишь фантазией, так почему бы не внести в него немного своих красок.
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
