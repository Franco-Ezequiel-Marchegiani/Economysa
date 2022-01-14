import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <section className="homeContainer">
      <div>
        <Sidebar/>
      </div>
      <div>
      <Header/>
      <h1>home</h1>
      </div>

    </section>
  );
}

export default App;
