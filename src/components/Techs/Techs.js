import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <div className='techs__container'>
        <h2 className='section-title techs__title'>Технологии</h2>
        <h3 className='techs__subtitle'>7 технологий</h3>
        <p className='techs__description'>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className='techs__technologies'>
          <li className='techs__technology'>HTML</li>
          <li className='techs__technology'>CSS</li>
          <li className='techs__technology'>JS</li>
          <li className='techs__technology'>React</li>
          <li className='techs__technology'>Git</li>
          <li className='techs__technology'>Express.js</li>
          <li className='techs__technology'>mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
