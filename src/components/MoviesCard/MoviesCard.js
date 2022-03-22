import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { serverLink } from '../../utils/constans';

function MoviesCard({ card, onSave, onDelete }) {
  //const currentUser = useContext(CurrentUserContext);
  const location = useLocation();

  function calculateTime(minutes) {
    let hour = Math.floor(minutes / 60);
    let min = minutes % 60;

    if(hour == 0) {
      return `${min}мин`
    }

    return `${hour}ч${min}мин`
  }

  function handleChange(evt) {
    if(!evt.target.checked) {
      onSave(card);
    } else {
      onDelete(card.id)
    }
  }

  return (
    <article className="card">
      <a href={card.trailerLink} target='_blank'><img className="card__image" src={serverLink + card.image.url} alt={card.nameRU} /></a>
      <div className="card__body">
        <h3 className="card__title">{card.nameRU}</h3>
        <p className="card__duration">{calculateTime(card.duration)}</p>
        {location.pathname === "/movies" ? (
          <input
            type="checkbox"
            className="card__checkbox"
            defaultChecked={card.saved === true}
            onChange={handleChange}
          ></input>
        ) : (
          <button className="card__btn" onClick={onDelete}></button>
        )}
      </div>
    </article>
  );
}

export default MoviesCard;
