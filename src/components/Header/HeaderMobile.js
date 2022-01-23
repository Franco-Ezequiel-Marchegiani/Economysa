import React from 'react';
import './Header.css';
import Logo from '../../images/fotoEjemplo.jpg'

function HeaderMobile() {
  return (
    <header className="headerMobile">
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

export default HeaderMobile;