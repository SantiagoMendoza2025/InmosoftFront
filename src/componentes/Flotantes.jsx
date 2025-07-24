import React, { useState } from 'react';
import './Flotantes.css';

import whatsappIcon from '../assets/whatsapp.png';
import campanaIcon from '../assets/campana.png';

const Flotantes = () => {
  const [verNotificaciones, setVerNotificaciones] = useState(false);

  const notificaciones = [
    { id: 1, texto: 'Tu Fecha De Pago Está Próxima a Vencer', icono: '📅' },
    { id: 2, texto: 'Tenemos Un Nuevo Inmueble Para Ti', icono: '🏠' },
    { id: 3, texto: '¿Ya Programaste Tu Mantenimiento Anual?', icono: '🛠️' },
    { id: 4, texto: '¿Conoces Nuestra Nueva Actualización?', icono: '🔄' },
    { id: 5, texto: 'Visita Pendiente', icono: '📌' }
  ];

  return (
    <div className="flotantes-container">
      {/* WhatsApp */}
      <a
        href="https://wa.me/573001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>

      {/* Campana */}
      <div className="campana-container">
        <img
          src={campanaIcon}
          alt="Campana"
          className="campana-btn"
          onClick={() => setVerNotificaciones(!verNotificaciones)}
        />

        {verNotificaciones && (
          <div className="popup-notificaciones">
            <div className="titulo-popup">Notificaciones</div>
            {notificaciones.map((n) => (
              <div key={n.id} className="notificacion-item">
                <span className="icono">{n.icono}</span>
                <span className="texto">{n.texto}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Flotantes;

