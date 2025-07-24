import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Logo_filtros.png';
import tiktok from '../assets/tiktok.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import userIcon from '../assets/user.png';
import settingsIcon from '../assets/settings.png';
import telefono from '../assets/telefono.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-column left">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo Inmosoft" />
        </Link>

        <ul className="nav-links">
          <li><Link to="/preguntas">Preguntas Frecuentes</Link></li>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
        </ul>
      </div>

      <div className="navbar-column contacto">
        <div className="contact-info">
          <img src={telefono} alt="Teléfono" />
          <div>
            <p>Línea Única</p>
            <strong>604 444 43 44</strong>
          </div>
        </div>
        <div className="social-icons">
          <img src={tiktok} alt="TikTok" />
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
        </div>
        <div className="icons-right">
          <img src={userIcon} alt="Usuario" />
          <img src={settingsIcon} alt="Configuración" />
          <Link to="/Login" className="login-butto1">Inicio Sesión</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
