import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';

function MoviesCardList({ searchValue, isShortMovies, handleFliterMovies, handleCheckSaveMovie, movies, handleSaveMovie, handleDeleteMovie }) {
  const [moviesList, setMoviesList] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const location = useLocation();

  function getMovies() {
    let list = handleFliterMovies(movies);
    setNotFound(false);

    if(location.pathname === '/movies' && searchValue === '') {
      return setMoviesList([]);
    }

    if(list.length === 0) {
      return setNotFound(true);
    }

    setMoviesList(list)
  }

  useEffect(() => {
    getMovies();
  }, [isShortMovies, searchValue, movies, location.pathname]);

  useEffect(() => {
    if(location.pathname === '/saved-movies') {
      setMoviesList(movies);
    } else {
      setMoviesList([]);
    }

    setNotFound(false);
  }, [movies, location.pathname]);

  return(
    <div className='movies-cards'>
      <div className='movies-cards__container'>
      {notFound ? <p>Ничего не найдено</p> : moviesList.map((item) => <MoviesCard key={item.id} movie={item} onSave={handleSaveMovie} onDelete={handleDeleteMovie} isChecked={handleCheckSaveMovie(item)} />)}
      </div>
      <div className='movies-cards__btn-zone'>
        <button className={`movies-cards__btn ${location.pathname === '/saved-movies' ? 'movies-cards__btn_type_none' : ''}`}>Ещё</button>
      </div>
    </div>
  );
}

export default MoviesCardList;
