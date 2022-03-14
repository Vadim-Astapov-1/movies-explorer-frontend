import React from 'react';
import './AboutProject.css';

function AboutProject() {

  return(
    <section className='about-project'>
      <h2 className='section-title about-project__title'>О проекте</h2>
      <div className='about-project__columns'>
        <div className='about-project__column'>
          <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__column'>
          <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about-project__grafik'>
        <p className='about-project__time-icon'>1 неделя</p>
        <p className='about-project__time-icon'>4 недели</p>
        <p className='about-project__subtitle-icon'>Back-end</p>
        <p className='about-project__subtitle-icon'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
