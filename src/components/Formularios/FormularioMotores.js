import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Formularios.css';
import { Form } from 'react-bootstrap';

function FormularioMotores() {
  let arrayInputsDeliveryUsers = [
      {
          id:1,
          title: "Código",
          inputType: "number"
      },
      {
          id:2,
          title: "Cod Cliente",
          inputType: "text"
      },
      {
          id:3,
          title: "Dirección Entrega",
          inputType: "text"
      },
      {
          id:4,
          title: "Ruta",
          inputType: "text"
      },
      {
          id:5,
          title: "Módulo",
          inputType: "text"
      },
      {
          id:6,
          title: "Ubigeo",
          inputType: "number"
      },
      {
          id:7,
          title: "Giro",
          inputType: "number"
      },
      {
          id:8,
          title: "Latitud",
          inputType: "email"
      },
      {
          id:9,
          title: "Longitud",
          inputType: "number"
      },
      {
          id:10,
          title: "Secuencia Visita",
          inputType: "number"
      },
      {
          id:11,
          title: "Horario Vent1",
          inputType: "text"
      },
      {
          id:12,
          title: "Horario Vent2",
          inputType: "text"
      },
  ]
  return (
    <section className="globalContainerContent">
      <Sidebar/>
      <section className='fondoGeneral'>
        <Header/>
        <div className='divEspacioHome'><p>...</p></div>
        <div className='infoPrincipal'>
            <h2 className='titleUserCreate'>Crear Cliente</h2>
                <div className='infoPrincipalContainer'>
                    <Form className='inputContainerAll'>                
                        {arrayInputsDeliveryUsers.map((input, i) =>{
                            return <Form.Group className="mb-3 inputContainer" controlId="formBasicEmail">
                                        <Form.Label>{input.title}</Form.Label>
                                        <Form.Control type={input.inputType}/>
                                   </Form.Group>
                        })}
                    </Form>
                </div>
        </div>
        <Footer/>
      </section>

    </section>
  );
}

export default FormularioMotores;