import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <h1 className="header__title">Todos</h1>
    </header>
  );
}

export default Header;
