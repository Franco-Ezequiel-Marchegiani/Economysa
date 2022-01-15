import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Formularios.css';

function FormularioUsuarios() {
  return (
    <section className="globalContainerContent">
      <Sidebar/>
      <section className='fondoGeneral'>
        <Header/>
        <div className='divEspacioHome'><p>...</p></div>
        <div className='infoPrincipal'>
          <div className='infoPrincipalContainer'>
            <h1>Empty Page</h1>
            <p>Use this page to start from scratch and place your custom content.</p>
            <button>Home</button>
          </div>
        </div>
        <Footer/>
      </section>

    </section>
  );
}

export default FormularioUsuarios;