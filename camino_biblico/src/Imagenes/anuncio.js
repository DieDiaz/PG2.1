import React, { useState } from 'react';
import axios from 'axios';
import './anuncio.css';

function Anuncio() {
    const [titulo, setTitulo] = useState('');
    const [cuerpo, setCuerpo] = useState('');
    const [importante, setImportante] = useState(false);
    const [sociedad, setSociedad] = useState('');
    const [error, setError] = useState('');
    const usuario = localStorage.getItem('userName'); // Assume the user is logged in and userName is stored

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/create-announcement', {
                titulo,
                cuerpo,
                importante,
                sociedad,
                usuario
            });

            // Optionally, you can navigate or clear the form after success
            alert('Announcement created successfully!');
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Error in request');
        }
    };

    return (
        <div>
            <h2>Crear Anuncio</h2>
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
                    <label>Cuerpo:</label>
                    <textarea
                        value={cuerpo}
                        onChange={(e) => setCuerpo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Importante:</label>
                    <input
                        type="checkbox"
                        checked={importante}
                        onChange={(e) => setImportante(e.target.checked)}
                    />
                </div>
                <div>
                    <label>Sociedad:</label>
                    <input
                        type="text"
                        value={sociedad}
                        onChange={(e) => setSociedad(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Crear Anuncio</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}

export default Anuncio;
