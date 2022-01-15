import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Formularios.css';

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
        <h2 className='titleUserCreate'>Crear Cliente</h2>
          <div className='infoPrincipalContainer'>
            <div>
                <label htmlFor="">Algo</label>
                <input type="text" />
            </div>
          </div>
        </div>
        <Footer/>
      </section>

    </section>
  );
}

export default FormularioUsuarios;