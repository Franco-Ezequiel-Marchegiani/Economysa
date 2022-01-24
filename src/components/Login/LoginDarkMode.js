import React, {useState} from 'react';
import './LoginDarkMode.css';
import { Form } from 'react-bootstrap';
import Logo from '../../images/logo.png'
import Login from './Login';
function LoginDarkMode() {
    const [darkMode, setDarkMode] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    /* Configuración de API */
    const url = "https://viringo-dev.herokuapp.com/oauth/token";
    const user = "angular_client"; 
    const pass = 123456;
    const encodeData = btoa(user + ":" + pass);
    let item = (email, password);
    let urlencoded = new URLSearchParams();
    urlencoded.append("username", email);
    urlencoded.append("password", password);
    urlencoded.append("grant_type", "password");
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic " + encodeData);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    let configAPI = {
        method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
      }
    /* Llamado a la API */
    async function login (e){ 
        let result = await fetch(url,configAPI);
          result = await result.json();
          localStorage.setItem("user-info",JSON.stringify(result))
          console.log(result);
      }
    const formulario = e => {
        e.preventDefault()
      }
  return (
      <section>
          {darkMode === true ?
            <section className="loginContainerAll_dark">
                <i onClick={() => setDarkMode(false)} className="far fa-circle btn-darkModeLogin_dark"></i>
                    <div>
                        <main>
                            <div className='loginContainer_dark'>
                                <div className='loginContent'>
                                    <div className='iconLoginContainer'>
                                        <img src={Logo} alt="" />
                                    </div>
                                    <h1 className='titleLogin_dark'><span>Ingresa a</span> <span>Economysa</span></h1>
                                    <p className='parrafoLogin_dark'>Bienvenido. Ingrese sus credenciales.</p>
                                    <Form className='formLogin' onSubmit={formulario}>
                                            <Form.Group className="mb-3 inputRegister_dark" controlId="formBasicEmail">
                                            <Form.Label>Correo electrónico</Form.Label>
                                                <Form.Control onChange={(e) =>setEmail(e.target.value)} className='inputRegisterInput_dark' type="email" placeholder="Ingresa tu correo electrónico..." />
                                                <i className="fas fa-user"></i>
                                            </Form.Group>

                                            <Form.Group className="mb-3 inputRegister_dark" controlId="formBasicPassword">
                                            <Form.Label>Contraseña</Form.Label>
                                                <Form.Control onChange={(e) =>setPassword(e.target.value)} className='inputRegisterInput_dark' type="password" placeholder="Ingresa tu contraseña..." />
                                                <i className="fas fa-lock logoPasswordLogin"></i>
                                            </Form.Group>
                                            <button onClick={login} className='btn-datosFormRegister_dark' type="submit">
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