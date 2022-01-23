import React, {useState, useEffect} from 'react';
import './Login.css';
import LoginDarkMode from './LoginDarkMode';
import LoginLightMode from './LoginLightMode';
function Login() {
  const [darkMode, setDarkMode] = useState(false);

  const user = "angular_client"; 
  const pass = 123456;
  const encodeData = btoa(user + ":" + pass);

  let borrador = "a"
  const requestAPI = {
    method: "POST",
    "Authorization": "Basic " + borrador,
    "Content-Type": "application/x-www-form-urlencoded"
  }
  useEffect(() => {
  }, []);

  console.log(darkMode);
  return (
    <section>
    {darkMode === false ? <LoginLightMode/> : <LoginDarkMode/> }
    </section>
  );
}

export default Login;
