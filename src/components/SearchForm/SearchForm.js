import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ handleGetMovies, movies, handleFliterMovies}) {
  const [searchValue, getSearchValue] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const location = useLocation();

  function handleChange(evt) {
    getSearchValue(evt.target.value);
  }

  function handleCheckShortMovies(evt) {
    if(evt.target.checked) {
      setIsShortMovies(true);
    } else {
      setIsShortMovies(false);
    }

    if(location.pathname === '/movies') {
      localStorage.setItem('isShortMovies', !isShortMovies);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    if(searchValue === '') {
      return setIsValid(false);
    }

    setIsValid(true);

    if(location.pathname === '/movies') {
      localStorage.setItem('searchText', searchValue);
      // Пойдет запрос и данные в state переменной обновляться
      handleGetMovies();
    }

    handleFliterMovies(searchValue, isShortMovies, movies);
  }

  useEffect(() => {
    if(location.pathname === '/movies') {
      const text = localStorage.getItem('searchText');
      const checkStatus = JSON.parse(localStorage.getItem('isShortMovies'))

      if(text) {
        getSearchValue(text);
        setIsShortMovies(checkStatus);
      }
    }
  }, [])

  useEffect(() => {
    handleFliterMovies(searchValue, isShortMovies, movies);
  }, [isShortMovies, movies]);

  return(
    <div className='search'>
      <form className='seacrh__form' onSubmit={handleSubmit} noValidate>
        <input type='text' value={searchValue} onChange={handleChange} className='search__input' name='movies' placeholder='Фильм' id='search-input' required></input>
        <button type='submit' className='search__submit-btn'>Поиск</button>
      </form>
      <span className='search__input-error' id='search-input-error'>{!isValid ? 'Нужно ввести ключевое слово' : ''}</span>
      <FilterCheckbox check={isShortMovies} onCheck={handleCheckShortMovies} />
    </div>
  );
}

export default SearchForm;
