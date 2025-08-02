import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Filtros from './pages/Filtros';
import Notificaciones from './pages/Notificaciones';
import Flotantes from './componentes/Flotantes.jsx';
import Login from './pages/Login.jsx';
import Register from './componentes/register.jsx';
import Recover from './componentes/Recover';
import VerifyCode from './componentes/VerifyCode';
import ResetPassword from './componentes/ResetPassword';

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

function AppLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    
    <div className="app-container">
      {!isLoginPage && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/filtros" element={<Filtros />} />
          <Route path="/notificaciones" element={<Notificaciones />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recover" element={<Recover />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </main>

      {!isLoginPage && <Footer />}
      {!isLoginPage && <Flotantes />}

      {showTopButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          🔺
        </button>
      )}
    </div>
  );
}

export default App;