import React from 'react';
import './Login.css';
import { Form } from 'react-bootstrap';
import Logo from '../../images/logo.png'
function Login() {
  return (
    <section className="loginContainerAll">
        <div>
            <main className='prueba'>
                <div className='loginContainer'>
                    <div>
                      <span className='btn-darkModeLogin'></span>
                    </div>
                    <div className='loginContent'>
                    <div className='iconLoginContainer'>
                      <img src={Logo} alt="" />
                    </div>
                      <h1 className='titleLogin'><span>Ingresa a</span> <span>Economysa</span></h1>
                      <p className='parrafoLogin'>Bienvenido. Ingrese sus credenciales.</p>
                      <Form className='formLogin'>
                          <Form.Group className="mb-3 inputRegister" controlId="formBasicEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu correo electrónico..." />
                          </Form.Group>

                          <Form.Group className="mb-3 inputRegister" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Ingresa tu contraseña..." />
                          </Form.Group>
                          <button className='btn-datosFormRegister' type="submit">
                            Ingresar
                          </button>
                      </Form>
                    </div>
                  </div>
                  <div className='pruebaImg'>

                  </div>
            </main>
          </div>
    </section>
  );
}

export default Login;
