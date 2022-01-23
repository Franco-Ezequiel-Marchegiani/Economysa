import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { Form, Table, Pagination } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Motor.css';

function Motor() {
  const params = useParams();
  const id = Number(params.id)
  let titulosMotores = [
    {
      id: 1,
      titulo: "Listado de Clientes",
    },
    {
      id: 2,
      titulo: "Listado de Direcciones Entrega",
    }
  ]
  let columnasTablasMotores = [
    {
      id: 1,
      columna1: "Código",
      columna2: "Nombre",
      columna3: "Código Padre",
      columna4: "Razón Social",
      columna5: "Tipo Documento",
      columna6: "Nro. Documento",
      columna7: "Estado",
      columna8: "Acciones",
    },
    {
      id: 2,
      columna1: "Código",
      columna2: "Código Cli",
      columna3: "Dirección Entrega",
      columna4: "Ruta",
      columna5: "Módulo",
      columna6: "Ubigeo",
      columna7: "Estado",
      columna8: "Acciones",
    }
  ]
  let tituloMotor = titulosMotores.find(titulo => titulo.id === id)
  let columnasTablaMotorSeleccionado = columnasTablasMotores.find(titulo => titulo.id === id)
  return (
    <section className="globalContainerContent">
      <Sidebar/>
      <section className='fondoGeneral'>
        <Header/>
        <div className='divEspacioHome'><p>...</p></div>
        <div className='infoPrincipalSeguridadYMotor'>
            <section className='infoListadoUsuarioContainer'>
                <h2>{tituloMotor.titulo}</h2>
                  <div className='filtradoBusquedaContainer'>
                      <div className='subtitleContainer'>
                      <p>Filtros de Búsqueda</p>
                      <i className="fas fa-minus"></i>
                      {/* <i className="fas fa-plus"></i> */}
                      </div>
                        <div className='formularioContainerAll'>
                            <Form className='formularioContainer'>
                              <Form.Group className="mb-3 inputCodigo" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Código" />
                              </Form.Group>

                              <button className='btn-search'>Buscar</button>
                            </Form>
                      </div>
                      <p className='textRegistrosEncontrados'>registro(s) encontrados</p>
                  </div>
            </section>
        </div>
        <section className='tableContainer'>
          <div className='tableContent'>
          {id === 1 ? <button className='btn-new'><Link className='linkBtn-new' to="/Seguridad/create-user"><i className="fas fa-plus"></i> Nuevo</Link></button> 
          : 
          <button className='btn-new'><Link className='linkBtn-new' to="/motor/form-motor"><i className="fas fa-plus"></i> Nuevo</Link></button>}
          
                <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>{columnasTablaMotorSeleccionado.columna1}</th>
                        <th>{columnasTablaMotorSeleccionado.columna2}</th>
                        <th>{columnasTablaMotorSeleccionado.columna3}</th>
                        <th>{columnasTablaMotorSeleccionado.columna4}</th>
                        <th>{columnasTablaMotorSeleccionado.columna5}</th>
                        <th>{columnasTablaMotorSeleccionado.columna6}</th>
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
                <div className='paginationContainer'>
                  <Pagination className='pagination'>
                    <Pagination.First className='paginationFlechasIzquierda'/>
                    <Pagination.Prev className='paginationFlechasIzquierda'/>
                    <Pagination.Item className='paginationItem' active>{1}</Pagination.Item>
                    <Pagination.Next className='paginationFlechasDerecha'/>
                    <Pagination.Last className='paginationFlechasDerecha'/>
                  </Pagination>
                </div>     
          </div>   
        </section>
        <Footer/>
      </section>
    </section>
  );
}

export default Motor;
