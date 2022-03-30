import React, { useEffect } from 'react';
import './Movies.css';

function Movies({ handleLoadLocalMovies, children }) {
  useEffect(() => {
    handleLoadLocalMovies();
  }, []);

  return(
    <section className='movies'>
      {children}
    </section>
  );
}

export default Movies;
