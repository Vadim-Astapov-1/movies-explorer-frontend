import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return(
    <div className='search'>
      <form className='seacrh__form'>
        <input type='text' className='search__input' name='movies' placeholder='Фильм'></input>
        <button type='submit' className='search__submit-btn'>Поиск</button>
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
