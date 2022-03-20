import React from 'react';
import './MoviesCard.css';
import img from '../../images/test-img.png';
import { useLocation } from 'react-router-dom';

function MoviesCard({ card }) {
  const location = useLocation();

  return (
    <article className="card">
      <a href='#' target='_blank'><img className="card__image" src={img} alt={card.name} /></a>
      <div className="card__body">
        <h3 className="card__title">33 слова о дизайне</h3>
        <p className="card__duration">1ч42мин</p>
        {location.pathname === "/movies" ? (
          <input
            type="checkbox"
            className="card__checkbox"
            defaultChecked={card.saved === true}
          ></input>
        ) : (
          <button className="card__btn"></button>
        )}
      </div>
    </article>
  );
}

export default MoviesCard;
