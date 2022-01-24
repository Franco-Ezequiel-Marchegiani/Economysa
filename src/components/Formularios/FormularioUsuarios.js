import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Formularios.css';
import { Form } from 'react-bootstrap';

function FormularioUsuarios() {
    let arrayInputsUsers = [
        {
            id:1,
            title: "Código",
            inputType: "number"
        },
        {
            id:2,
            title: "Nombre Cliente",
            inputType: "text"
        },
        {
            id:3,
            title: "Código Padre",
            inputType: "text"
        },
        {
            id:4,
            title: "Razón Social",
            inputType: "text"
        },
        {
            id:5,
            title: "Tipo Documento",
            inputType: "text"
        },
        {
            id:6,
            title: "Nro. Documento",
            inputType: "number"
        },
        {
            id:7,
            title: "Celular",
            inputType: "number"
        },
        {
            id:8,
            title: "Correo",
            inputType: "email"
        },
        {
            id:9,
            title: "Limite Cred",
            inputType: "number"
        },
        {
            id:10,
            title: "Limite Doc",
            inputType: "number"
        },
        {
            id:11,
            title: "Dirección fiscal",
            inputType: "text"
        },
        {
            id:12,
            title: "Ubigeo",
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
            <h2 className='titleUserCreate'>Crear Usuario</h2>
                <div className='infoPrincipalContainer'>
                    <Form className='inputContainerAll'>                
                        {arrayInputsUsers.map((input, i) =>{
                            return <Form.Group className="mb-3 inputContainer" controlId="formBasicEmail">
                                        <Form.Label>{input.title}</Form.Label>
                                        <Form.Control type={input.inputType}/>
                                   </Form.Group>
                        })}
                    </Form>
                    <div className='btns-container'>
                        <div className='btn-formContainer'>
                            <button className='btn-saveForm'><i className="fas fa-save"></i> Guardar</button>
                        </div>
                        <div className='btn-formContainer2'>
                            <button className='btn-backForm'><i className="fas fa-arrow-left"></i>Atrás</button>
                        </div>
                    </div>
                </div>
        </div>
        <Footer/>
      </section>

    </section>
  );
}

export default FormularioUsuarios;