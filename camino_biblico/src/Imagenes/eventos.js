import React, { useState } from 'react';
import axios from 'axios';
import './calendario.css';

function AddEvent() {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');
    const [tipo, setTipo] = useState('Importante');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/events', {
                titulo,
                descripcion,
                fecha,
                tipo
            });
            alert('Event added successfully!');
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Error in request');
        }
    };

    return (
        <div>
            <h2>Añadir Evento</h2>
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
                    <label>Descripción:</label>
                    <textarea
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>
                <div>
                    <label>Fecha y Hora:</label>
                    <input
                        type="datetime-local"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Tipo:</label>
                    <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                        <option value="Importante">Importante</option>
                        <option value="Evento">Evento</option>
                    </select>
                </div>
                <button type="submit">Añadir Evento</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}

export default AddEvent;
