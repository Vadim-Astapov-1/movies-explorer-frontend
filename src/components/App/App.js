import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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

function App() {
  const location = useLocation();
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [tooltipSuccess, setTooltipSuccess] = useState(false);

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

  useEffect(() => {
    setIsMenuHidden(true);
  }, [location.pathname]);

  return(
    <div className='App'>
      <Header><Navigation loggedIn={loggedIn} handleBtnNavClick={handleBtnNavClick} /></Header>
      <Routes>
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route exact path='/' element={<Main />} />
        <Route path='/movies' element={
          <Movies>
            <SearchForm />
            <MoviesCardList />
            <Preloader />
          </Movies>
          } />
        <Route path='/saved-movies' element={
          <SavedMovies>
            <SearchForm />
            <MoviesCardList />
            <Preloader />
          </SavedMovies>
          } />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <SideBar isHidden={isMenuHidden} handleBtnNavClick={handleBtnNavClick} onOutSideClick={closeOnOutside} />
      <InfoTooltip status={tooltipSuccess} isOpen={isInfoTooltipOpen} onClose={closePopup} onOutSideClick={closeOnOutside} />
    </div>
  );
}


export default App;

