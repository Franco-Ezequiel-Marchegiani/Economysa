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