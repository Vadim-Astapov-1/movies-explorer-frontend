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

function App() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [tooltipSuccess, setTooltipSuccess] = useState(false);
  const [movies, setMovies] = useState([]);

  const [currentUser, setCurrentUser] = useState({
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

  function handleUpdateProfile(name, email) {
    mainApi.editProfile(name, email)
      .then((res) => {
        console.log(res)
        //setCurrentUser(userInfo);
      })
      .then(() => {
        //closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegister(name, email, password) {
    mainApi.register(name, email, password)
      .then((res) => {
        //setTooltipSuccess(true);
        console.log(res.data)
        setCurrentUser(res.data);
        navigate('/movies');
      })
      .catch((err) => {
        //setTooltipSuccess(false);
        console.log(err);
      })
      .finally(() => {
        //setIsTooltipPopupOpen(true);
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
        //setTooltipSuccess(false);
        //setIsTooltipPopupOpen(true);
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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setIsMenuHidden(true);
  }, [location.pathname]);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  return(
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
      <Header><Navigation loggedIn={loggedIn} handleBtnNavClick={handleBtnNavClick} /></Header>
      <Routes>
        <Route path='/signup' element={<Register onRegister={handleRegister} />} />
        <Route path='/signin' element={<Login onLogin={handleLoggin} />} />
        <Route exact path='/' element={<Main />} />
        <Route path='/movies' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Movies>
              <SearchForm />
              <MoviesCardList />
              <Preloader />
            </Movies>
          </ProtectedRoute>
        } />
        <Route path='/saved-movies' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <SavedMovies>
              <SearchForm />
              <MoviesCardList />
              <Preloader />
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
      <InfoTooltip status={tooltipSuccess} isOpen={isInfoTooltipOpen} onClose={closePopup} onOutSideClick={closeOnOutside} />
      </CurrentUserContext.Provider>
    </div>
  );
}


export default App;

