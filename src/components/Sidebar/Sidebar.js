import React from 'react';
import './Sidebar.css';
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

function Sidebar() {
  return (
    <aside className="sidebarContainer">
    <div className='iconTitleSideBar'>
        <Link className='linkHeaderSidebar' to="/">
            <img src={Logo} alt="ej" />
            <span>Economysa</span>
        </Link>
      <button><i className="fas fa-lock"></i></button>
    </div>
    <div className='linksContainer'>
        <Link className='linkSidebar' to="/">Dasboard <i className="fas fa-home"></i></Link>
        <Link className='linkSidebar' to="/Seguridad">
            Seguridad 
            <div className='iconContainerSeguridad'>
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-lock lockLink"></i>
            </div>
        </Link>
        <Link className='linkSidebar' to="/motor">
            Motor
            <div>
                <i className="fas fa-chevron-down"></i>
                <i className="fas fa-globe-americas"></i>
            </div>
        </Link>
        <Accordion>
            <Accordion.Item eventKey="0" className='contentContainerLink'>
                <Accordion.Header className='titleLink'>Seguridad <i className="fas fa-lock lockLink"></i></Accordion.Header>
                  <Accordion.Body className='contentInsideLink'>
                      <div className="linkContainer">
                        <Link to="/Seguridad" className='linkBar'>Seguridad</Link>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                  </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='contentContainerLink'>
                <Accordion.Header  className='titleLink'>Motor <i className="fas fa-globe-americas"></i></Accordion.Header>
                  <Accordion.Body>
                      <div className="linkContainer">
                        <Link to="/" className='linkBar'>Clientes</Link>
                        <i className="fas fa-list-ul"></i>
                      </div>
                      <div className="linkContainer">
                        <Link to="/" className='linkBar'>Direcciones Entrega</Link>
                        <i className="fas fa-folder"></i>
                      </div>
                      <div className="linkContainer">
                        <Link to="/" className='linkBar'>Productos</Link>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                      <div className="linkContainer">
                        <Link to="/" className='linkBar'>Mecánicas</Link>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                      <div className="linkContainer">
                        <Link to="/" className='linkBar'>Proveedores</Link>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                      <div className="linkContainer">
                        <Link to="/" className='linkBar'>Vendedores</Link>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                  </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
    </aside>
  );
}

export default Sidebar;
