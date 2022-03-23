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
import Preloader from '../Preloader/Preloader';
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
  const [searchValue, getSearchValue] = useState('');
  const [shortMovies, setShortMovies] = useState(false);

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

  function handleGetSearchValue(value) {
    getSearchValue(value);
  }

  function handleCleanSearchValue() {
    getSearchValue('');
  }

  const handleSearchMovies = (movies) => {
    let moviesList = movies.filter((item) => item.nameRU.toLowerCase().includes(searchValue.toLowerCase()));

    if(shortMovies) {
      let shortMoviesList = moviesList.filter((item) => item.duration <= 40);
      return shortMoviesList;
    }

    return moviesList;
  }

  function handleCheckShortMovies(evt) {
    if(evt.target.checked) {
      setShortMovies(true);
    } else {
      setShortMovies(false);
    }
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
    moviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
      })
      .catch((err) => {
        console.log(err);
        setTooltipSuccess(false);
        setTooltipType(errorText);
        setIsInfoTooltipOpen(true);
      });
  }

  function handleSaveMovie(movie) {
    mainApi.saveMovie(movie)
      .then((newMovie) => {
        setSavedMovies(savedMovies.map((item) => item.movieId === movie.movieId ? newMovie : item));
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
        console.log(res)
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
        navigate('/movies');
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
    if(loggedIn) {
      handleGetMovies();
      handleGetSavedMovies();
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
            <Movies handleCleanSearchValue={handleCleanSearchValue}>
              <SearchForm handleGetSearchValue={handleGetSearchValue} handleCheckShortMovies={handleCheckShortMovies} />
              <Preloader />
              <MoviesCardList searchValue={searchValue} isShortMovies={shortMovies} handleSearchMovies={handleSearchMovies} handleCheckSaveMovie={handleCheckSaveMovie} movies={movies} handleSaveMovie={handleSaveMovie} handleDeleteMovie={handleDeleteMovie} />
            </Movies>
          </ProtectedRoute>
        } />
        <Route path='/saved-movies' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <SavedMovies handleGetSavedMovies={handleGetSavedMovies} handleCleanSearchValue={handleCleanSearchValue}>
              <SearchForm handleGetSearchValue={handleGetSearchValue} handleCheckShortMovies={handleCheckShortMovies} />
              <Preloader />
              <MoviesCardList searchValue={searchValue} isShortMovies={shortMovies} handleSearchMovies={handleSearchMovies} handleCheckSaveMovie={handleCheckSaveMovie} movies={savedMovies} handleSaveMovie={handleSaveMovie} handleDeleteMovie={handleDeleteMovie} />
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

