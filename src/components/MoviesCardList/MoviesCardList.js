import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { testCardList } from '../../utils/constans';
import { useLocation } from 'react-router-dom';

function MoviesCardList() {
  const location = useLocation();

  const generateCards = () => {
    if(location.pathname === '/movies') {
      return testCardList.map((item) => <MoviesCard key={item._id} card={item} />)
    }

    return testCardList.map((item) => {
      if(item.saved === true) {
        return <MoviesCard key={item._id} card={item} />
      }
    });
  }

  return(
    <div className='movies-cards'>
      <div className='movies-cards__container'>
      {generateCards()}
      </div>
      <div className='movies-cards__btn-zone'>
        <button className={`movies-cards__btn ${location.pathname === '/saved-movies' ? 'movies-cards__btn_type_none' : ''}`}>Ещё</button>
      </div>
    </div>
  );
}

export default MoviesCardList;

//{location.pathname === '/movies' ? testCardList.map((item) => <MoviesCard key={item._id} card={item} /> ) :
      //testCardList.map((item) => {
        //if(item.saved === true) {
          //return <MoviesCard key={item._id} card={item} />
        //}

        //return <p className='movies-cards__subtitle'>У вас нет сохраненных фильмов</p>
      //})
     // }
