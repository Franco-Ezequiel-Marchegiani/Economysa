import React from 'react';
import './Header.css';
import Logo from '../../images/logo.png'

function Header() {
  return (
    <header className="header">
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
