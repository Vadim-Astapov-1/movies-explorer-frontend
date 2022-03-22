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
  // production true
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [tooltipSuccess, setTooltipSuccess] = useState(false);
  const [tooltipType, setTooltipType] = useState('');
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);
  const [unfilteredMovies, setUnfilteredMovies] = useState([]);
  const [formError, setFormError] = useState('');

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

  function handleSearchMovies(search) {
    let moviesList = movies.filter((item) => item.nameRU.toLowerCase().includes(search.toLowerCase()));
    setUnfilteredMovies(moviesList);

    if(shortMovies) {
      let shortMoviesList = moviesList.filter((item) => item.duration <= 40);
      return setFoundMovies(shortMoviesList);
    }

    setFoundMovies(moviesList);
  }

  function handleCheckShortMovies(evt) {
    if(evt.target.checked) {
      let shortMoviesList = foundMovies.filter((item) => item.duration <= 40);
      setShortMovies(true);
      setFoundMovies(shortMoviesList);
    } else {
      setShortMovies(false);
      setFoundMovies(unfilteredMovies);
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
        setSavedMovies(savedMovies.map((item) => item._id === movie.id ? newMovie : item));
        console.log(savedMovies);
      })
      .catch((err) => {
        console.log(err);
        setTooltipSuccess(false);
        setTooltipType(errorText);
        setIsInfoTooltipOpen(true);
      });
  }

  function handleDeleteMovie(id, movie) {
    mainApi.deleteMovie(id)
      .then(() => {
        setSavedMovies(savedMovies.filter((item) => item._id !== movie.id));
      })
      .catch((err) => {
        console.log(err);
        setTooltipSuccess(false);
        setTooltipType(errorText);
        setIsInfoTooltipOpen(true);
      });
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
            <Movies>
              <SearchForm handleSearchMovies={handleSearchMovies} handleCheckShortMovies={handleCheckShortMovies} />
              <Preloader />
              <MoviesCardList movies={foundMovies} handleSaveMovie={handleSaveMovie} handleDeleteMovie={handleDeleteMovie} />
            </Movies>
          </ProtectedRoute>
        } />
        <Route path='/saved-movies' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <SavedMovies handleGetSavedMovies={handleGetSavedMovies}>
              <SearchForm />
              <Preloader />
              <MoviesCardList movies={foundMovies} />
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

