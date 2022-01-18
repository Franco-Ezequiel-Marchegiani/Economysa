import React from 'react';
import './Login.css';
import { Form } from 'react-bootstrap';
import Logo from '../../images/logo.png'
function Login() {
  return (
    <section className="loginContainerAll">
      <div>
        <span className='btn-darkModeLogin'>a</span>
      </div>
      <main className='loginContainer'>
        <div>
          <img src={Logo} alt="" />
          <h1>Ingresa a Economysa</h1>
          <p>Bienvenido. Ingrese sus credenciales.</p>
          <Form>
              <Form.Group className="mb-3 inputRegister" controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                  <div>
                    <Form.Control type="email" placeholder="Ingresa tu correo electrónico..." />
                    <i className="fas fa-lock"></i>
                  </div>
              </Form.Group>

              <Form.Group className="mb-3 inputRegister" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                  <div>
                    <Form.Control type="password" placeholder="Ingresa tu contraseña..." />
                    <i className="fas fa-lock"></i>
                  </div>
              </Form.Group>
              <button className='btn-datosFormRegister' type="submit">
                Ingresar
              </button>
          </Form>
        </div>
      </main>
    </section>
  );
}

export default Login;
