import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { serverLink } from '../../utils/constans';

function MoviesCard({ movie, onSave, onDelete, isChecked }) {
  const location = useLocation();

  function calculateTime(minute) {
    let hour = Math.floor(minute / 60);
    let min = minute % 60;

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
      image: serverLink + movie.image.url ? serverLink + movie.image.url : 'https://unknown.com/result',
      trailerLink: movie.trailerLink ? movie.trailerLink : 'https://unknown.com/result',
      thumbnail: movie.thumbnail ? movie.thumbnail : 'https://unknown.com/result',
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
    <article className='card'>
      <a href={movie.trailerLink} target='_blank'><img className='card__image' src={location.pathname === '/movies' ? serverLink + movie.image.url : movie.image} alt={movie.nameRU} /></a>
      <div className='card__body'>
        <h3 className='card__title'>{movie.nameRU}</h3>
        <p className='card__duration'>{calculateTime(movie.duration)}</p>
        {location.pathname === '/movies' ? (
          <input
            type='checkbox'
            className='card__checkbox'
            onChange={handleChange}
            defaultChecked={isChecked && true}
          ></input>
        ) : (
          <button className='card__btn' onClick={deleteMovie}></button>
        )}
      </div>
    </article>
  );
}

export default MoviesCard;
