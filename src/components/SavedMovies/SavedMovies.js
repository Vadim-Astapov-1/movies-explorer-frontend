import React, { useEffect } from 'react';
import './SavedMovies.css';

function SavedMovies({ handleGetSavedMovies, children }) {
  useEffect(() => {
    handleGetSavedMovies();
  }, []);

  return <section className='saved-movies'>{children}</section>;
}

export default SavedMovies;
