import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

class HomeView extends React.Component {
  render() {
    return (
      <div className='login-form-container'>
        <form className='login-form'>
          <input className='login-form__input' type="text" placeholder="Login" />
          <input className='login-form__input' type="password" placeholder="Password" />
          <input className='login-form__input login-form__input-btn' type="submit" value="Login"/>
          <input className='login-form__input login-form__input-btn signup' type="button" value="Sign up"/>
        </form>
      </div>
    );
  }
}

export default HomeView
