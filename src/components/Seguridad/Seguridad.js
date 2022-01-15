import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Seguridad.css';
import { Form } from 'react-bootstrap';

function Seguridad() {
  return (
    <section className="globalContainerContent">
      <Sidebar/>
      <section className='fondoGeneral'>
        <Header/>
        <div className='divEspacioHome'><p>...</p></div>
        <div className='infoPrincipal'>
            <section className='infoListadoUsuarioContainer'>
                <h2>Listado de Usuarios</h2>
                  <div className='filtradoBusquedaContainer'>
                      <div className='subtitleContainer'>
                      <p>Filtros de Búsqueda</p>
                      <i className="fas fa-minus"></i>
                      {/* <i className="fas fa-plus"></i> */}
                      </div>
                        <div className='formularioContainerAll'>
                            <Form className='formularioContainer'>
                              <Form.Group className="mb-3 inputUsuario" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Nombres" />
                              </Form.Group>

                              <Form.Group className="mb-3 inputUsuario" controlId="formBasicPassword">
                                <Form.Control type="email" placeholder="Correo electrónico" />
                              </Form.Group>
                              <button className='btn-search'>Buscar</button>
                            </Form>
                      </div>
                      <p className='textRegistrosEncontrados'>registro(s) encontrados</p>
                  </div>
            </section>
        </div>
        <Footer/>
      </section>

    </section>
  );
}

export default Seguridad;
