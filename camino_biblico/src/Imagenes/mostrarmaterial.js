import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import './Material.css';

function DisplayMaterial() {
    const [material, setMaterial] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMaterial = async () => {
            try {
                const response = await axios.get('http://localhost:5000/material');
                setMaterial(response.data);
            } catch (error) {
                setError('Error al recuperar el material');
                console.error('Error fetching material:', error);
            }
        };

        fetchMaterial();
    }, []);

    const renderContent = (content) => {
        const sanitizedContent = DOMPurify.sanitize(content);
        return { __html: sanitizedContent };
    };

    return (
        <div>
            <h2>Material Compartido</h2>
            {error && <p className="error">{error}</p>}
            <div className="material-list">
                {material.length > 0 ? (
                    material.map(item => (
                        <div key={item.id} className="material-item">
                            <h3>{item.titulo}</h3>
                            <p><strong>Tipo:</strong> {item.tipo}</p>
                            <p dangerouslySetInnerHTML={renderContent(item.contenido)}></p>
                            <p><strong>Publicado por:</strong> {item.usuario}</p>
                            <p className="fecha">Fecha: {new Date(item.fecha_publicacion).toLocaleString()}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay material compartido.</p>
                )}
            </div>
        </div>
    );
}

export default DisplayMaterial;
