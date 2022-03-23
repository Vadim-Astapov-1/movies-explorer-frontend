import React, { useEffect } from 'react';
import './Movies.css';

function Movies({ handleCleanSearchValue, children }) {
  useEffect(() => {
    handleCleanSearchValue();
  }, [])

  return(
    <section className='movies'>
      {children}
    </section>
  );
}

export default Movies;
