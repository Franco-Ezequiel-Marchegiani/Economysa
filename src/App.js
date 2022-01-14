import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <section className="homeContainer">
      <section>
        <Sidebar/>
      </section>
      <section>
      <Header/>
      <h1>home</h1>
      </section>

    </section>
  );
}

export default App;
