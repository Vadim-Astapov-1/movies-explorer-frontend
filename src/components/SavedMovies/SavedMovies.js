import React from 'react';
import './SavedMovies.css';

function SavedMovies({ children }) {
  return(
    <section className='saved-movies'>
      {children}
    </section>
  );
}

export default SavedMovies;
