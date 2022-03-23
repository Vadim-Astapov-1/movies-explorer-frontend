import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { serverLink } from '../../utils/constans';

function MoviesCard({ movie, onSave, onDelete, isChecked }) {
  const location = useLocation();

  function calculateTime() {
    let hour = Math.floor(movie.duration / 60);
    let min = movie.duration % 60;

    if(hour === 0) {
      return `${min}мин`
    }

    return `${hour}ч${min}мин`
  }

  function deleteMovie() {
    if(location.pathname === '/movies') {
      onDelete(movie.id)
    } else {
      onDelete(movie.movieId)
    }
  }

  function saveMovie() {
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
  }

  function handleChange(evt) {
    if(evt.target.checked) {
      saveMovie();
    } else {
      deleteMovie();
    }
  }

  return (
    <article className="card">
      <a href={movie.trailerLink} target='_blank'><img className="card__image" src={location.pathname === '/movies' ? serverLink + movie.image.url : movie.image} alt={movie.nameRU} /></a>
      <div className="card__body">
        <h3 className="card__title">{movie.nameRU}</h3>
        <p className="card__duration">{calculateTime}</p>
        {location.pathname === "/movies" ? (
          <input
            type="checkbox"
            className="card__checkbox"
            onChange={handleChange}
            defaultChecked={isChecked && true}
          ></input>
        ) : (
          <button className="card__btn" onClick={deleteMovie}></button>
        )}
      </div>
    </article>
  );
}

export default MoviesCard;
