import React from 'react';
import './Footer.css';
import Logo from '../../images/logo.png'
function Footer() {
  return (
    <footer className='footerContainer'>
          <img src={Logo} alt="ej" />
          <div className='footerTextContainer'>
              <p>Jeferson Cieza</p>
              <span>Development</span>
          </div>
      </footer>
  );
}

export default Footer;
