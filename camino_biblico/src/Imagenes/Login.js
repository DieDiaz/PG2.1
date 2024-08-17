import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [nombre, setNombre] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { nombre, contraseña });
            const { token, nombre: userName, puesto, rol } = response.data;
            
            localStorage.setItem('token', token);
            localStorage.setItem('userName', userName);
            localStorage.setItem('puesto', puesto);
            localStorage.setItem('rol', rol);

            navigate('/usuario');
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Error en la solicitud');
        }
    };

    return (
        <div className="Login">
            <form className="campos" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Usuario:</label>
                <input
                    type="text"
                    id="nombre"
                    name="Usuario"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <label htmlFor="contraseña">Contraseña:</label>
                <input
                    type="password"
                    id="contraseña"
                    name="Contraseña"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                />
                <input type="submit" value="Submit" />
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}

export default Login;
