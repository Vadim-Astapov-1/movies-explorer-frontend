import React, { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ handleGetSearchValue, handleCheckShortMovies }) {
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(true);

  function handleChange(evt) {
    setName(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    if(name === '') {
      return setIsValid(false);
    }

    setIsValid(true);
    handleGetSearchValue(name);
  }

  useEffect(() => {
    setName('');
  }, []);

  return(
    <div className='search'>
      <form className='seacrh__form' onSubmit={handleSubmit} noValidate>
        <input type='text' onChange={handleChange} className='search__input' name='movies' placeholder='Фильм' id='search-input' required></input>
        <button type='submit' className='search__submit-btn'>Поиск</button>
      </form>
      <span className='search__input-error' id='search-input-error'>{!isValid ? 'Нужно ввести ключевое слово' : ''}</span>
      <FilterCheckbox onCheck={handleCheckShortMovies} />
    </div>
  );
}

export default SearchForm;
