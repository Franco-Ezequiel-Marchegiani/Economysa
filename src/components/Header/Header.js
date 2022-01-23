import React from 'react';
import './Header.css';
import Logo from '../../images/fotoEjemplo.jpg';
import HeaderMobile from "./HeaderMobile";
function Header() {
  return (
    <header className="header">
    <HeaderMobile/>
      <div className='headerContent'>
          <img src={Logo} alt="ej" />
          <div className='headerTextContainer'>
              <p>Jeferson Cieza</p>
              <span>Development</span>
          </div>
      </div>
    </header>
  );
}

export default Header;
