import React, {useState} from 'react';
import './Login.css';
import LoginDarkMode from './LoginDarkMode';
import LoginLightMode from './LoginLightMode';
function Login() {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);
  return (
    <section>
    {darkMode === false ? <LoginLightMode/> : <LoginDarkMode/> }
    </section>
  );
}

export default Login;
