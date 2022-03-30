import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList({ countMovies, handleCountMovies, isActivePreloader, notFound, foundMovies, handleCheckSaveMovie, handleSaveMovie, handleDeleteMovie }) {
  function makeResult() {
    if(isActivePreloader) {
      return <Preloader />;
    }

    if(notFound) {
      return <p className='movies-cards__subtitle'>Ничего не найдено</p>;
    }

    return foundMovies.slice(0, countMovies).map((item) => <MoviesCard key={item.id} movie={item} onSave={handleSaveMovie} onDelete={handleDeleteMovie} isChecked={handleCheckSaveMovie(item)} />);
  }

  return(
    <div className='movies-cards'>
      <div className={`movies-cards__container ${isActivePreloader || notFound ? 'movies-cards__container_type_preload' : ''}`}>
        {makeResult()}
      </div>
      <div className='movies-cards__btn-zone'>
        <button className={`movies-cards__btn ${foundMovies.length <= countMovies ? 'movies-cards__btn_type_none' : ''}`} onClick={handleCountMovies}>Ещё</button>
      </div>
    </div>
  );
}

export default MoviesCardList;
