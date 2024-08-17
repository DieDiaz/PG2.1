import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendario.css'; // Importa el CSS

function DisplayCalendar() {
    const [events, setEvents] = useState([]);
    const [date, setDate] = useState(new Date());
    const [highlightedDays, setHighlightedDays] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/events');
                const eventsData = response.data;
                setEvents(eventsData);

                // Extract unique days with events
                const daysWithEvents = eventsData.map(event => new Date(event.fecha).toDateString());
                setHighlightedDays([...new Set(daysWithEvents)]);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    const handleDateChange = (date) => {
        setDate(date);
    };

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const dateString = date.toDateString();
            return highlightedDays.includes(dateString) ? 'highlighted' : null;
        }
        return null;
    };

    const eventsForDate = events.filter(event => new Date(event.fecha).toDateString() === date.toDateString());

    return (
        <div>
            <h2>Calendario de Eventos</h2>
            <Calendar
                onChange={handleDateChange}
                value={date}
                tileClassName={tileClassName}
            />
            <div className="event-info">
                <h3>Eventos en {date.toDateString()}:</h3>
                <ul>
                    {eventsForDate.length > 0 ? (
                        eventsForDate.map(event => (
                            <li key={event.id} className="event-item">
                                <strong>{event.titulo}</strong>
                                <p>{event.descripcion}</p>
                                <p>Tipo: {event.tipo}</p>
                            </li>
                        ))
                    ) : (
                        <p>No hay eventos para esta fecha.</p>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default DisplayCalendar;
