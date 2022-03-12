import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio';
import Navigation from '../Navigation/Navigation';
import AboutMe from '../AboutMe/AboutMe';
import NavTab from '../NavTab/NavTab';
import NotFound from '../Not-found/NotFound';
import Register from '../Register/Register';
import FormAuth from '../FormAuth/FormAuth';
import Login from '../Login/Login';

function App() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  function handleBtnHeaderClick() {
    if(isMenuHidden) {
      setIsMenuHidden(false);
    } else {
      setIsMenuHidden(true);
    }
  }

  return(
    <div className='App'>
      <Header handleBtnHeaderClick={handleBtnHeaderClick}><NavTab isHidden={isMenuHidden} /></Header>
      <Routes>
        <Route path='/signup' element={
          <Register>
            <FormAuth formName='register' />
          </Register>
        } />
        <Route path='/signin' element={
          <Login>
            <FormAuth formName='login' />
          </Login>
        } />
        <Route exact path='/' element={
          <>
            <Main>
              <Promo />
              <AboutProject />
              <Techs />
              <AboutMe>
                <Portfolio />
              </AboutMe>
            </Main>
          </>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer>
        <Navigation />
      </Footer>
    </div>
  );
}


export default App;

