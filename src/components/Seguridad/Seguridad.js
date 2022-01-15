import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Seguridad.css';
import { Form, Table } from 'react-bootstrap';

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
        <section className='tableContainer'>
              <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
              </Table>        
        </section>
        <Footer/>
      </section>

    </section>
  );
}

export default Seguridad;
