import React, {useState} from 'react';
import './Login.css';
import { Form } from 'react-bootstrap';
import Logo from '../../images/logo.png'
import Login from './Login';
function LoginDarkMode() {
    const [darkMode, setDarkMode] = useState(true);
  console.log(darkMode);
  return (
      <section>
          {darkMode === true ?
            <section className="loginContainerAll">
                <i onClick={() => setDarkMode(false)} class="fas fa-circle btn-darkModeLogin"></i>
                    <div>
                        <main className='prueba'>
                            <div className='loginContainer'>
                                <div className='loginContent'>
                                <div className='iconLoginContainer'>
                                    <img src={Logo} alt="" />
                                </div>
                                    <h1 className='titleLogin'><span>DARKMODE a</span> <span>Economysa</span></h1>
                                    <p className='parrafoLogin'>Bienvenido. Ingrese sus credenciales.</p>
                                    <Form className='formLogin'>
                                        <Form.Group className="mb-3 inputRegister" controlId="formBasicEmail">
                                        <Form.Label>Correo electrónico</Form.Label>
                                            <Form.Control type="email" placeholder="Ingresa tu correo electrónico..." />
                                            <i class="fas fa-user"></i>
                                        </Form.Group>

                                        <Form.Group className="mb-3 inputRegister" controlId="formBasicPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                            <Form.Control type="password" placeholder="Ingresa tu contraseña..." />
                                            <i className="fas fa-lock"></i>
                                        </Form.Group>
                                        <button className='btn-datosFormRegister' type="submit">
                                        Ingresar
                                        </button>
                                    </Form>
                                </div>
                                </div>
                                <div className='imagenFondo'>

                                </div>
                        </main>
                    </div>
            </section>
            :
            <Login/>
          }
      </section>
  );
}

export default LoginDarkMode;