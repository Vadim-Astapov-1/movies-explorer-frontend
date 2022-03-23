import { useCallback, useState } from "react";


export function SearchAlgorithm(movieBase) {
  const [keyWord, setKeyWord] = useState('');
  const [foundMovie, setFoundMovie] = useState([]);
  const [timeValue, setTimeValue] = useState([]);
  const [isFound, setIsFound] = useState(true);
  const [typeShortMovies, setTypeShortMovies] = useState(false);

  const handleChangeSearch = (evt) => {
    const word = evt.target.value;
    setKeyWord(word);
  }

  const handleChangeCheckbox = (evt) => {
    if(evt.target.checked) {
      let shortMoviesList = foundMovie.filter((item) => item.duration <= 40)
      typeShortMovies(true);
      setFoundMovie(shortMoviesList);
    } else {
      typeShortMovies(false);
      setFoundMovie(timeValue);
    }
  }

  const findMovie = useCallback(() => {
    let moviesList = movieBase.filter((item) => item.nameRU.toLowerCase().includes(keyWord.toLowerCase()));

    if(moviesList.length === 0) {
      return setIsFound(false);
    }

    setTimeValue(moviesList);

    if(typeShortMovies) {
      let shortMoviesList = moviesList.filter((item) => item.duration <= 40);
      return setFoundMovie(shortMoviesList);
    }

    setFoundMovie(moviesList)
  }, [keyWord, foundMovie]);

  const resetDate = useCallback(() => {
    setKeyWord('');
    setFoundMovie([]);
    setIsFound(true);
    setTypeShortMovies(false);
  }, [setKeyWord, setFoundMovie, setIsFound, setTypeShortMovies])

  return { handleChangeSearch, handleChangeCheckbox, findMovie, resetDate };
}

//function handleSearchMovies(search, movies) {
  //console.log(movies)
  //let moviesList = movies.filter((item) => item.nameRU.toLowerCase().includes(search.toLowerCase()));
  //setUnfilteredMovies(moviesList);

  //if(shortMovies) {
    //let shortMoviesList = moviesList.filter((item) => item.duration <= 40);
    //return setFoundMovies(shortMoviesList);
  //}

  //setFoundMovies(moviesList);
//}

//function handleCheckShortMovies(evt) {
  //if(evt.target.checked) {
    //let shortMoviesList = foundMovies.filter((item) => item.duration <= 40);
    //setShortMovies(true);
    //setFoundMovies(shortMoviesList);
  //} else {
    //setShortMovies(false);
    //setFoundMovies(unfilteredMovies);
  //}
//}
