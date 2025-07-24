import React, { useState } from 'react';
import './Register.css';

function Register() {
    const [role, setRole] = useState('usuario'); // cambia el valor con un clic

    const handleRoleChange = (selectedRole) => {
        setRole(selectedRole);
    }; // funciones para cambiar el rol

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado con rol:', role);
    }; //  funcion para enviar el formulario 

    return (
        <div className='register-container'>
            <div className='register-card'>
                <div className='register-logo'>
                    <img src='/src/assets/logo.png' alt='Logo Inmosoft' />
                </div>

                <div className='role-buttons'>
                    <button
                        type='button'
                        className={role === 'usuario' ? 'active' : ''}
                        onClick={() => handleRoleChange('usuario')}
                    >
                        Registrarse como Usuario
                    </button>
                    <button
                        type='button'
                        className={role === 'admin' ? 'active' : ''}
                        onClick={() => handleRoleChange('admin')}
                    >
                        Registrarse como Administrador
                    </button>
                </div>
                
                <form className='register-form' onSubmit={handleSubmit}>
                    <p className='register-title'>
                        {role === 'usuario'
                            ? 'Crea Tu Cuenta Y Encuentra Tu Hogar Ideal'
                            : 'Registra Tu Empresa'} 
                    </p>  

                    {/* Campos para Usuario */}
                    {role === 'usuario' && (
                        <>
                            <input type="text" placeholder="Nombre" required />
                            <input type="text" placeholder="Apellido" required />
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Contraseña" required />
                            <input type="password" placeholder="Confirmar Contraseña" required />
                        </>
                    )}

                    {/* Campos para Administrador */}
                    {role === 'admin' && (
                        <>
                            <input type="text" placeholder="Nombre de la Empresa" required />
                            <input type="text" placeholder="Dirección" required />
                            <input type="tel" placeholder="Teléfono" required />
                            <input type="email" placeholder="Correo" required />
                            <input type="password" placeholder="Contraseña" required />
                        </>
                    )}

                    <button type="submit" className='register-button'>Registrarse</button>
                </form>
            </div>
        </div>
    );
}

export default Register;











