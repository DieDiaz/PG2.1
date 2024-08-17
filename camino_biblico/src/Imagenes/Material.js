import React, { useState } from 'react';
import axios from 'axios';
import './Material.css';

function AddMaterial() {
    const [titulo, setTitulo] = useState('');
    const [tipo, setTipo] = useState('Enlace');
    const [contenido, setContenido] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const usuario = 'usuarioEjemplo';

        try {
            await axios.post('http://localhost:5000/material', {
                titulo,
                tipo,
                contenido,
                usuario
            });
            alert('Material añadido exitosamente!');
            setTitulo('');
            setTipo('Enlace');
            setContenido('');
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Error en la solicitud');
        }
    };

    return (
        <div>
            <h2>Añadir Material</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Tipo:</label>
                    <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                        <option value="Enlace">Enlace</option>
                        <option value="Reflexión">Reflexión</option>
                    </select>
                </div>
                <div>
                    <label>Contenido:</label>
                    <textarea
                        value={contenido}
                        onChange={(e) => setContenido(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Añadir Material</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}

export default AddMaterial;
