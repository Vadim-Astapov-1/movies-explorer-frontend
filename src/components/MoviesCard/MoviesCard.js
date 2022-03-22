import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { serverLink } from '../../utils/constans';

function MoviesCard({ movie, onSave, onDelete }) {
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
    if(evt.target.checked) {
      onSave({
        country: movie.country ? movie.country : 'Неизвестно',
        director: movie.director ? movie.director : 'Неизвестно',
        duration: movie.duration ? movie.duration : 0,
        year: movie.year ? movie.year : 0,
        description: movie.description ? movie.description : 'Неизвестно',
        image: serverLink + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: movie.thumbnail ? movie.thumbnail : 'https://pbs.twimg.com/media/EYkX9U2XQAUu3-X.jpg:large',
        movieId: movie.id,
        nameRU: movie.nameRU ? movie.nameRU : 'Неизвестно',
        nameEN: movie.nameEN ? movie.nameEN : 'Неизвестно',
      });
    } else {
      onDelete(movie.id)
    }
  }

  return (
    <article className="card">
      <a href={movie.trailerLink} target='_blank'><img className="card__image" src={serverLink + movie.image.url} alt={movie.nameRU} /></a>
      <div className="card__body">
        <h3 className="card__title">{movie.nameRU}</h3>
        <p className="card__duration">{calculateTime(movie.duration)}</p>
        {location.pathname === "/movies" ? (
          <input
            type="checkbox"
            className="card__checkbox"
            defaultChecked={movie.saved === true}
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
