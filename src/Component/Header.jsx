import React from 'react'
import LOGO from '../image/logo.png'
import BTN_HEADER from '../subComponents/BtnHeader.jsx';


const Header = () => {
  return (
    <header className="header">
    <div className="header__container-logo">
        <img className="header__logo" src={LOGO} alt="logo.png" />
    </div>
    <nav className="header__nav">
      <BTN_HEADER textContent={'Inicio'} />
      <BTN_HEADER textContent={'Cafe'} />
      <BTN_HEADER textContent={'Sobre Nosotros'} />
      <BTN_HEADER textContent={'Delivery'} />
    </nav>
    <div className="header__container-login">
        <i className="header__user-icon bi bi-person-circle"></i>
    </div>
    <i className="header__icon bi bi-list"></i>
</header>
  )
}

export default Header
