import React, {useState} from 'react';
import './LoginDarkMode.css';
import { Form } from 'react-bootstrap';
import Logo from '../../images/logo.png'
import Login from './Login';
function LoginDarkMode() {
    const [darkMode, setDarkMode] = useState(true);
  console.log(darkMode);
  return (
      <section>
          {darkMode === true ?
            <section className="loginContainerAll_dark">
                <i onClick={() => setDarkMode(false)} class="fas fa-circle btn-darkModeLogin"></i>
                    <div>
                        <main>
                            <div className='loginContainer_dark'>
                                <div className='loginContent'>
                                    <div className='iconLoginContainer'>
                                        <img src={Logo} alt="" />
                                    </div>
                                    <h1 className='titleLogin_dark'><span>Ingresa a</span> <span>Economysa</span></h1>
                                    <p className='parrafoLogin_dark'>Bienvenido. Ingrese sus credenciales.</p>
                                    <Form className='formLogin'>
                                            <Form.Group className="mb-3 inputRegister_dark" controlId="formBasicEmail">
                                            <Form.Label>Correo electrónico</Form.Label>
                                                <Form.Control className='inputRegisterInput_dark' type="email" placeholder="Ingresa tu correo electrónico..." />
                                                <i class="fas fa-user"></i>
                                            </Form.Group>

                                            <Form.Group className="mb-3 inputRegister_dark" controlId="formBasicPassword">
                                            <Form.Label>Contraseña</Form.Label>
                                                <Form.Control className='inputRegisterInput_dark' type="password" placeholder="Ingresa tu contraseña..." />
                                                <i className="fas fa-lock"></i>
                                            </Form.Group>
                                            <button className='btn-datosFormRegister' type="submit">
                                            Ingresar
                                            </button>
                                    </Form>
                                </div>
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