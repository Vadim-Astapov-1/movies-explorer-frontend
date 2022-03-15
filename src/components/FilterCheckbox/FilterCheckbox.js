import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return(
    <div className='filter'>
      <input type='checkbox' className='filter__checkbox'></input>
      <label className='filter__name'>Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
