import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './anuncio.css';

function AnnouncementsList() {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                const response = await axios.get('http://localhost:5000/announcements');
                setAnnouncements(response.data);
            } catch (error) {
                console.error('Error fetching announcements:', error);
            }
        };

        fetchAnnouncements();
    }, []);

    return (
        <div className="announcements-list">
            <h2>Anuncios</h2>
            <ul>
                {announcements.map((anuncio) => (
                    <li key={anuncio.id}>
                        <h3>{anuncio.titulo}</h3>
                        <p>{anuncio.cuerpo}</p>
                        <p>Publicado por: {anuncio.usuario} en {anuncio.sociedad}</p>
                        {anuncio.importante && <p><strong>Importante</strong></p>}
                        <p className="fecha">Fecha: {new Date(anuncio.fecha_publicacion).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AnnouncementsList;
