import React from 'react';
import './Movies.css';

function Movies({ children }) {
  return(
    <section className='movies'>
      {children}
    </section>
  );
}

export default Movies;
