import React, { useEffect } from 'react';
import './Profile.css';
import { testUser } from '../../utils/constans';
import { Link } from 'react-router-dom';
import { Validation } from '../Validation/Validation';

function Profile() {
  let validation = Validation();

  useEffect(() => {
    validation.resetForm();
  }, []);

  return(
    <section className='profile'>
      <h2 className='profile__title'>{`Привет, ${testUser.name}`}</h2>
      <form className='form-profile' noValidate>
      <div className='form-profile__container'>
        <label className='form-profile__input-name' htmlFor='profile-name-input'>Имя</label>
        <input type='text' onChange={validation.handleChange} defaultValue={testUser.name} className={`form-profile__input ${validation.errors.name ? 'form-profile__input_invalid' : ''}`} id='profile-name-input' name='name' placeholder='Введите имя' minLength='2' maxLength='30' required></input>
      </div>
      <span className='form-profile__input-error' id='profile-name-input-error'>{validation.errors.name}</span>
      <div className='form-profile__container'>
        <label className='form-profile__input-name' htmlFor='profile-email-input'>E-mail</label>
        <input type='email' onChange={validation.handleChange} defaultValue={testUser.email} className={`form-profile__input ${validation.errors.email ? 'form-profile__input_invalid' : ''}`} id='profile-email-input' name='email' placeholder='Введите E-mail' required></input>
      </div>
      <span className='form-profile__input-error' id='profile-name-input-error'>{validation.errors.email}</span>
      <button type='submit' className='form-profile__submit-btn' disabled={!validation.isValid && true}>Редактировать</button>
      </form>
      <Link to='/signin' className='profile__link'>Выйти из аккаунта</Link>
    </section>
  );
}

export default Profile;
