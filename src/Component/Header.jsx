import React from 'react'
import '../css/header.css'
import LOGO from '../image/logo.png'

const Header = () => {
  return (
    <header className="header">
    <div className="header__container-logo">
        <img className="header__logo" src={LOGO} alt="logo.png" />
    </div>
    <nav className="header__nav">
        <a className="header__nav-link" href="#">Inicio</a>
        <a className="header__nav-link" href="#">Cafe</a>
        <a className="header__nav-link" href="#">Sobre Nosotros</a>
        <a className="header__nav-link" href="#">Delivery</a>
    </nav>
    <div className="header__container-login">
        <i className="header__user-icon bi bi-person-circle"></i>
    </div>
    <i className="header__icon bi bi-list"></i>
</header>
  )
}

export default Header
