import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onCheck }) {
  function handleChange(evt) {
    onCheck(evt);
  }

  return(
    <div className='filter'>
      <input type='checkbox' onChange={handleChange} className='filter__checkbox'></input>
      <label className='filter__name'>Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
