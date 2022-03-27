import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import NotFound from '../Not-found/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SideBar from '../SideBar/SideBar';
import Navigation from '../Navigation/Navigation';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { CurrentUserContext } from '../../context/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { errorText, successTextProfile,  errorTextConflict, errorLogin} from '../../utils/constans';

function App() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [tooltipSuccess, setTooltipSuccess] = useState(false);
  const [tooltipType, setTooltipType] = useState('');
  const [formError, setFormError] = useState('');

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isActivePreloader, setIsActivePreloader] = useState(false);
  const [countMovies, setCountMovies] = useState(0);

  const [currentUser, setCurrentUser] = useState({
    _id: '',
    name: '',
    email: '',
  });

  const location = useLocation();
  const navigate = useNavigate();

  function closePopup() {
    setIsInfoTooltipOpen(false);
  }

  function closeMenu() {
    setIsMenuHidden(true);
  }

  function closeOnOutside(evt) {
    if (evt.target.classList.contains('popup')) {
      closePopup();
    }

    if (evt.target.classList.contains('sidebar-menu')) {
      closeMenu();
    }
  }

  function handleBtnNavClick() {
    if(isMenuHidden) {
      setIsMenuHidden(false);
    } else {
      setIsMenuHidden(true);
    }
  }

  function handleStartCountMovies() {
    let width = window.innerWidth;

    if(width > 768) {
      setCountMovies(12);
    }

    if(width <= 768) {
      setCountMovies(8);
    }

    if(width <= 480) {
      setCountMovies(5);
    }
  }

  function handleCountMovies() {
    let width = window.innerWidth;

    if(width > 768) {
      setCountMovies(countMovies + 4);
    }

    if(width <= 768) {
      setCountMovies(countMovies + 2);
    }

    if(width <= 480) {
      setCountMovies(countMovies + 5);
    }
  }

  const handleFliterMovies = (value, isShort, movies) => {
    setNotFound(false);

    if(location.pathname === '/movies') {
      const text = localStorage.getItem('searchText');

      if(!text) {
        return setFoundMovies([]);
      }
    }

    let moviesList = movies.filter((item) => item.nameRU.toLowerCase().includes(value.toLowerCase()));

    if(moviesList.length === 0) {
      return setNotFound(true);
    }

    if(isShort) {
      let shortMoviesList = moviesList.filter((item) => item.duration <= 40);

      if(shortMoviesList.length === 0) {
        return setNotFound(true);
      }

      return setFoundMovies(shortMoviesList);
    }

    return setFoundMovies(moviesList);
  }

  function handleGetSavedMovies() {
    mainApi.getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => {
        console.log(err);
        setTooltipSuccess(false);
        setTooltipType(errorText);
        setIsInfoTooltipOpen(true);
      })
  }

  function handleGetMovies() {
    setIsActivePreloader(true);

    moviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
        localStorage.setItem('movies', JSON.stringify(movies));
      })
      .catch((err) => {
        console.log(err);
        setTooltipSuccess(false);
        setTooltipType(errorText);
        setIsInfoTooltipOpen(true);
      })
      .finally(() => {
        setIsActivePreloader(false);
      })
  }

  function handleLoadLocalMovies() {
    const movies = JSON.parse(localStorage.getItem('movies'));

    if(movies) {
      setMovies(movies);
    }
  }

  function handleSaveMovie(movie) {
    mainApi.saveMovie(movie)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie]);
      })
      .catch((err) => {
        console.log(err);
        setTooltipSuccess(false);
        setTooltipType(errorText);
        setIsInfoTooltipOpen(true);
      });
  }

  function handleDeleteMovie(id) {
    mainApi.deleteMovie(id)
      .then(() => {
        setSavedMovies(savedMovies.filter((item) => item.movieId !== id));
      })
      .catch((err) => {
        console.log(err);
        setTooltipSuccess(false);
        setTooltipType(errorText);
        setIsInfoTooltipOpen(true);
      });
  }

  function handleCheckSaveMovie(item) {
    return savedMovies.some((someItem) => someItem.movieId === item.id);
  }

  function handleUpdateProfile(name, email) {
    mainApi.editProfile(name, email)
      .then((res) => {
        setCurrentUser(res);
        setTooltipSuccess(true);
        setTooltipType(successTextProfile);
      })
      .catch((err) => {
        console.log(err);
        setTooltipSuccess(false);
        if(err === 'Ошибка: 409') {
          return setTooltipType(errorTextConflict);
        }
        setTooltipType(errorText);
      })
      .finally(() => {
        setIsInfoTooltipOpen(true);
      })
  }

  function handleRegister(name, email, password) {
    mainApi.register(name, email, password)
      .then(() => {
        handleLoggin(email, password);
      })
      .catch((err) => {
        console.log(err);
        if(err === 'Ошибка: 409') {
          return setFormError(errorTextConflict);
        }
        setFormError(errorText);
      })
  }

  function handleLoggin(email, password) {
    mainApi.authorize(email, password)
      .then((res) => {
        setCurrentUser(res.user);
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {
        setFormError(errorLogin);
        console.log(err);
      });
  }

  function handleTokenCheck() {
    mainApi.getUser()
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
      })
      .catch(() => {
        setLoggedIn(false);
      });
  }

  function handleLogout() {
    mainApi.logout()
      .then(() => {
        setLoggedIn(false);
        navigate('/');
        localStorage.removeItem('movies');
        localStorage.removeItem('searchText');
        localStorage.removeItem('isShortMovies');
      })
      .catch((err) => {
        console.log(err);
        setTooltipSuccess(false);
        setTooltipType(errorText);
        setIsInfoTooltipOpen(true);
      });
  }

  useEffect(() => {
    setIsMenuHidden(true);
    setFormError('');
  }, [location.pathname]);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  useEffect(() => {
    handleStartCountMovies();
  }, [foundMovies])

  useEffect(() => {
    if(loggedIn) {
      handleGetSavedMovies();

      if(location.pathname === '/signin' || location.pathname === '/signup') {
        navigate('/movies');
      }
    }
  }, [loggedIn]);

  return(
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
      <Header><Navigation loggedIn={loggedIn} handleBtnNavClick={handleBtnNavClick} /></Header>
      <Routes>
        <Route path='/signup' element={<Register onRegister={handleRegister} reqError={formError} />} />
        <Route path='/signin' element={<Login onLogin={handleLoggin} reqError={formError} />} />
        <Route exact path='/' element={<Main />} />
        <Route path='/movies' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Movies handleLoadLocalMovies={handleLoadLocalMovies}>
              <SearchForm handleGetMovies={handleGetMovies} movies={movies} handleFliterMovies={handleFliterMovies} />
              <MoviesCardList countMovies={countMovies} handleCountMovies={handleCountMovies} isActivePreloader={isActivePreloader} foundMovies={foundMovies} notFound={notFound} handleCheckSaveMovie={handleCheckSaveMovie} handleSaveMovie={handleSaveMovie} handleDeleteMovie={handleDeleteMovie} />
            </Movies>
          </ProtectedRoute>
        } />
        <Route path='/saved-movies' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <SavedMovies handleGetSavedMovies={handleGetSavedMovies}>
              <SearchForm movies={savedMovies} handleFliterMovies={handleFliterMovies}/>
              <MoviesCardList countMovies={countMovies} handleCountMovies={handleCountMovies} isActivePreloader={isActivePreloader} foundMovies={foundMovies} notFound={notFound} handleCheckSaveMovie={handleCheckSaveMovie} handleSaveMovie={handleSaveMovie} handleDeleteMovie={handleDeleteMovie} />
            </SavedMovies>
          </ProtectedRoute>
        } />
        <Route path='/profile' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Profile onEdit={handleUpdateProfile} onLogout={handleLogout} />
          </ProtectedRoute>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <SideBar isHidden={isMenuHidden} handleBtnNavClick={handleBtnNavClick} onOutSideClick={closeOnOutside} />
      <InfoTooltip status={tooltipSuccess} typeError={tooltipType} isOpen={isInfoTooltipOpen} onClose={closePopup} onOutSideClick={closeOnOutside} />
      </CurrentUserContext.Provider>
    </div>
  );
}


export default App;
