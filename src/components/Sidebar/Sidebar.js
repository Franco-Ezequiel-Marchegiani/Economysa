import React from 'react';
import './Sidebar.css';
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebarContainer">
    <div className='iconTitleSideBar'>
        <Link className='linkHeaderSidebar' to="#">
            <img src={Logo} alt="ej" />
            <span>Economysa</span>
        </Link>
      <button><i className="fas fa-lock"></i></button>
    </div>
    <div className='linksContainer'>
        <Link className='linkSidebar' to="#">Dasboard <i className="fas fa-home"></i></Link>
        <Link className='linkSidebar' to="#">
            Seguridad 
            <div className='iconContainerSeguridad'>
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-lock lockLink"></i>
            </div>
        </Link>
        <Link className='linkSidebar' to="#">
            Motor
            <div>
                <i className="fas fa-chevron-down"></i>
                <i className="fas fa-globe-americas"></i>
            </div>
        </Link>
    </div>
    </aside>
  );
}

export default Sidebar;
