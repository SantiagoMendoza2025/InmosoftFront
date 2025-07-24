import React, { useState } from 'react';
import './Inicio.css';
import hero from '../assets/hero.jpg';
import imagen from '../assets/imagen.png';
import FiltrosAvanzados from '../componentes/FiltrosAvanzados'; // Asegúrate que la ruta sea correcta

function Inicio() {
  // Estado para mostrar u ocultar los filtros avanzados
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  // Función que alterna la visibilidad del menú avanzado
  const toggleFiltros = () => {
    setMostrarFiltros(prev => !prev);
  };

  return (
    <div className="inicio">
      <div className="fondo" style={{ backgroundImage: `url(${hero})` }} />

      <div className="contenido-principal">
        {/* Imagen central */}
        <div className="imagen-central-container">
          <img src={imagen} alt="Imagen central" className="imagen-central" />
        </div>

        {/* Contenido principal: tarjeta de búsqueda */}
        <div className="contenido-home">
          <div className="busqueda-card">

            {/* Botones de ARRIENDO / COMPRA */}
            <div className="botones-superiores">
              <button className="active">ARRIENDO</button>
              <button>COMPRA</button>
            </div>

            {/* Filtros básicos */}
            {/* Filtros básicos */}
            <div className="campos">
              {/* CIUDAD */}
              <select>
                <option value="">Selecciona ciudad</option>
                <option value="Medellín">Medellín</option>
                <option value="Bogotá">Bogotá</option>
                <option value="Cali">Cali</option>
                <option value="Barranquilla">Barranquilla</option>
              </select>

              {/* CÓDIGO */}
              <select>
                <option value="">Selecciona código</option>
                <option value="12345">12345</option>
                <option value="23145">23145</option>
                <option value="56325">56325</option>
              </select>

              {/* TIPO DE INMUEBLE */}
              <select>
                <option value="">Tipo de inmueble</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Casa">Casa</option>
                <option value="Oficina">Oficina</option>
                <option value="Lote">Lote</option>
              </select>

              {/* Botón FILTROS */}
              <button className="btn-filtros" onClick={toggleFiltros}>
                FILTROS
              </button>
            </div>


            {/* Filtros Avanzados (condicional) */}
            {mostrarFiltros && (
              <div className="filtros-avanzados-wrapper">
                <FiltrosAvanzados />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
