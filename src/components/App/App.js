import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import NavTab from '../NavTab/NavTab';
import NotFound from '../Not-found/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Navigation from '../Navigation/Navigation';

function App() {
  const location = useLocation();
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

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
      <Header><NavTab loggedIn={loggedIn} handleBtnNavClick={handleBtnNavClick} /></Header>
      <Routes>
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route exact path='/' element={<Main />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Navigation isHidden={isMenuHidden} handleBtnNavClick={handleBtnNavClick} />
      <Footer />
    </div>
  );
}


export default App;

