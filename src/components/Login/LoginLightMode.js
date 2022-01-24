import React, {useState} from 'react';
import './Login.css';
import { Form } from 'react-bootstrap';
import Logo from '../../images/logo.png'
import LoginDarkMode from './LoginDarkMode';
function LoginLightMode() {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = e =>{
    console.log(email, password);
  }
  const manejador = e => {
    e.preventDefault()
  }
  return (
    <section>
    {darkMode === false ?  
      <section className="loginContainerAll">
        <i onClick={() => setDarkMode(true)} className="fas fa-circle btn-darkModeLogin"></i>
          <div>
              <main>
                  <div className='loginContainer'>
                      <div className='loginContent'>
                      <div className='iconLoginContainer'>
                        <img src={Logo} alt="" />
                      </div>
                        <h1 className='titleLogin'><span>Ingresa a</span> <span>Economysa</span></h1>
                        <p className='parrafoLogin'>Bienvenido. Ingrese sus credenciales.</p>
                        <Form className='formLogin' onSubmit={manejador}>
                            <Form.Group className="mb-3 inputRegister" controlId="formBasicEmail">
                              <Form.Label>Correo electrónico</Form.Label>
                                  <Form.Control type="email" onChange={(e) =>setEmail(e.target.value)} placeholder="Ingresa tu correo electrónico..." />
                                  <i className="fas fa-user"></i>
                            </Form.Group>

                            <Form.Group className="mb-3 inputRegister" controlId="formBasicPassword">
                              <Form.Label>Contraseña</Form.Label>
                                  <Form.Control type="password" onChange={(e) =>setPassword(e.target.value)} placeholder="Ingresa tu contraseña..." />
                                  <i className="fas fa-lock logoPasswordLogin"></i>
                            </Form.Group>
                            <button onClick={login} className='btn-datosFormRegister' type="submit">
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

      : <LoginDarkMode/> }
    </section>
    
  );
}

export default LoginLightMode;