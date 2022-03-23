import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';

function MoviesCardList({ handleCheckSaveMovie, movies, handleSaveMovie, handleDeleteMovie }) {
  const location = useLocation();

  return(
    <div className='movies-cards'>
      <div className='movies-cards__container'>
      {movies.length === 0 ? '' : movies.map((item) => <MoviesCard key={item.id} movie={item} onSave={handleSaveMovie} onDelete={handleDeleteMovie} isChecked={handleCheckSaveMovie(item)} />)}
      </div>
      <div className='movies-cards__btn-zone'>
        <button className={`movies-cards__btn ${location.pathname === '/saved-movies' ? 'movies-cards__btn_type_none' : ''}`}>Ещё</button>
      </div>
    </div>
  );
}

export default MoviesCardList;
