import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ check, onCheck }) {
  function handleChange(evt) {
    onCheck(evt);
  }

  return(
    <div className='filter'>
      <input type='checkbox' onChange={handleChange} className='filter__checkbox' checked={check && true}></input>
      <label className='filter__name'>Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
