import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Logo from './images/logo.png'

function App() {
  return (
    <section className="homeContainer">
      <Sidebar/>
      <section className='fondoHome'>
      <Header/>
      <div className='divEspacioHome'><p>...</p></div>
      <div className='infoPrincipalHome'>
      <div className='infoPrincipalContainer'>
        <h1>Empty Page</h1>
        <p>Use this page to start from scratch and place your custom content.</p>
        <button>Home</button>
      </div>
      </div>
      <div className='homeRellenoContainer'>
          <img src={Logo} alt="ej" />
          <div className='homeTextoRellenoContainer'>
              <p>Jeferson Cieza</p>
              <span>Development</span>
          </div>
      </div>
      </section>

    </section>
  );
}

export default App;
