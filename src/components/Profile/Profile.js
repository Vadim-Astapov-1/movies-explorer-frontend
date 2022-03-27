import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { Validation } from '../Validation/Validation';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile({ onEdit, onLogout }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  let validation = Validation(currentUser);

  function handleChangeProfile(evt) {
    validation.handleChange(evt);
    if(evt.target.name === 'name') {
      setName(evt.target.value);
    } else {
      setEmail(evt.target.value);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onEdit(name, email);
    validation.resetForm();
  }

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  return(
    <section className='profile'>
      <h2 className='profile__title'>{`Привет, ${currentUser.name}`}</h2>
      <form className='form-profile' onSubmit={handleSubmit} noValidate>
      <div className='form-profile__container'>
        <label className='form-profile__input-name' htmlFor='profile-name-input'>Имя</label>
        <input type='text' value={name} onChange={handleChangeProfile} className={`form-profile__input ${validation.errors.name ? 'form-profile__input_invalid' : ''}`} id='profile-name-input' name='name' placeholder='Введите имя' minLength='2' maxLength='30' required></input>
      </div>
      <span className='form-profile__input-error' id='profile-name-input-error'>{validation.errors.name}</span>
      <div className='form-profile__container'>
        <label className='form-profile__input-name' htmlFor='profile-email-input'>E-mail</label>
        <input type='email' value={email} onChange={handleChangeProfile} className={`form-profile__input ${validation.errors.email ? 'form-profile__input_invalid' : ''}`} id='profile-email-input' name='email' placeholder='Введите E-mail' required></input>
      </div>
      <span className='form-profile__input-error' id='profile-name-input-error'>{validation.errors.email}</span>
      <button type='submit' className='form-profile__submit-btn' disabled={!validation.isValid && true}>Редактировать</button>
      </form>
      <Link to='/signin' className='profile__link' onClick={onLogout}>Выйти из аккаунта</Link>
    </section>
  );
}

export default Profile;
