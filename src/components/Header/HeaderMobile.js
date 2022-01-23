import React from 'react';
import './Header.css';
import Logo from '../../images/logo.png'

function HeaderMobile() {
  return (
    <header className="headerMobile">
      <div className='headerContentMobile'>
            <div className='logoTitleContainerHeader'>
                <img src={Logo} alt="ej" />
                <p>Mirage</p>
            </div>
            <div className='headerBtnContainerMobile'>
                <i className="fas fa-bars"></i>
                <i className="fas fa-align-right"></i>
                <i className="fas fa-ellipsis-v"></i>
            </div>
      </div>
    </header>
  );
}

export default HeaderMobile;