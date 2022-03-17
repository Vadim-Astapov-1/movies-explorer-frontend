import React from 'react';
import './InfoTooltip.css';
import successIcon from '../../images/success-icon.svg';
import errorIcon from '../../images/error-icon.svg';

function InfoTooltip({ status, isOpen, onClose, onOutSideClick }) {
  return(
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`} onClick={onOutSideClick}>
      <div className='popup__container'>
        <button className='popup__close-button' type='button' onClick={onClose}></button>
        <img className='popup__icon' src={status ? successIcon : errorIcon} alt='Иконка ответа' />
        <h2 className='popup__title'>Test error message</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
