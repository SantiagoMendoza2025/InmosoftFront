// Login.jsx
import React from 'react';
import './Login.css';
import { Link,useNavigate} from 'react-router-dom';




function Login() { // Declara el componente
  const navigate = useNavigate(); // que permite redireccionar al usuario a otra ruta

 return (
    <div className='login-container'>
      <div className='login-card'>
        <div className="login-logo">
          
          <img src="/src/assets/logo.png" alt="Logo Inmosoft" />
        </div>
         
        <form className='login-form'> 
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Contraseña" required />  
          <div className='forgot-password'>   
            <br> 
            
            </br>
            <div className='forgot-password'>
              <Link to="/recover">¿Olvidaste tu contraseña?</Link>
            </div>
            <br>
            </br>
            <br>
            </br>
          </div>
          <button type="submit" className='login-button'>Ingresar</button>
         
        </form>
        <button className="btn btn-primary" onClick={ () => navigate('/register')}>
              Crear una cuenta
            </button>
      </div>
    </div>
  );
}

export default Login;

// define la pantalla de inicio de sesión. Tiene un formulario con campos de email y contraseña, un enlace para recuperar la clave, 
// y un botón para ingresar. conecta con otras vistas usando Link de React Router.”
