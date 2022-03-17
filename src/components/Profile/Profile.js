import React from 'react';
import './Profile.css';
import { testUser } from '../../utils/constans';
import { Link } from 'react-router-dom';

function Profile() {
  return(
    <section className='profile'>
      <h2 className='profile__title'>{`Привет, ${testUser.name}`}</h2>
      <form className='form-profile' noValidate>
      <div className='form-profile__container'>
        <label className='form-profile__input-name' htmlFor='profile-name-input'>Имя</label>
        <input type='text' defaultValue={testUser.name} className='form-profile__input form-profile__input_invalid' id='profile-name-input' name='name' placeholder='Введите имя' minLength='2' maxLength='30' required></input>
      </div>
      <span className='form-profile__input-error form-auth__input-error_active' id='profile-name-input-error'>dasd</span>
      <div className='form-profile__container'>
        <label className='form-profile__input-name' htmlFor='profile-email-input'>E-mail</label>
        <input type='email' defaultValue={testUser.email} className='form-profile__input' id='profile-email-input' name='email' placeholder='Введите E-mail' required></input>
      </div>
      <span className='form-profile__input-error' id='profile-name-input-error'></span>
      <button type='submit' className='form-profile__submit-btn'>Редактировать</button>
      </form>
      <Link to='/signin' className='profile__link'>Выйти из аккаунта</Link>
    </section>
  );
}

export default Profile;
