import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Motor from './components/Motor/Motor';
import Seguridad from './components/Seguridad/Seguridad';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" exact={true} element={<App/>}/>
      <Route path="/login" exact={true} element={<Login/>}/>
      <Route path="/motor" exact={true} element={<Motor/>}/>
      <Route path="/Seguridad" exact={true} element={<Seguridad/>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
