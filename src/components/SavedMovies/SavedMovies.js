import React, { useEffect } from 'react';
import './SavedMovies.css';

function SavedMovies({ handleCleanSearchValue, handleGetSavedMovies, children }) {
  useEffect(() => {
    handleGetSavedMovies();
    handleCleanSearchValue();
  }, []);

  return(
    <section className='saved-movies'>
      {children}
    </section>
  );
}

export default SavedMovies;
