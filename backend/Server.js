const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cb',
    password: 'password',
    port: 5432,
});

const JWT_SECRET = '4141';

app.post('/login', async (req, res) => {
    const { nombre, contraseña } = req.body;

    try {
        const result = await pool.query('SELECT * FROM users WHERE nombre = $1', [nombre]);

        if (result.rows.length > 0) {
            const user = result.rows[0]; 

            if (await bcrypt.compare(contraseña, user.contraseña)) {
                const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
                res.json({ 
                    token,
                    nombre: user.nombre,
                    puesto: user.puesto,
                    rol: user.rol
                });
            } else {
                res.status(401).json({ message: 'Credenciales inválidas' });
            }
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

app.post('/create-announcement', async (req, res) => {
    const { titulo, cuerpo, importante, sociedad, usuario } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO announcements (titulo, cuerpo, importante, sociedad, usuario) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [titulo, cuerpo, importante, sociedad, usuario]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error creating announcement', error });
    }
});

app.get('/announcements', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM announcements ORDER BY fecha_publicacion DESC');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving announcements', error });
    }
});

app.post('/events', async (req, res) => {
    const { titulo, descripcion, fecha, tipo } = req.body;

    try {
        await pool.query('INSERT INTO events (titulo, descripcion, fecha, tipo) VALUES ($1, $2, $3, $4)', [titulo, descripcion, fecha, tipo]);
        res.status(201).json({ message: 'Event added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding event', error });
    }
});

app.get('/events', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM events ORDER BY fecha ASC');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving events', error });
    }
});

app.post('/material', async (req, res) => {
    const { titulo, tipo, contenido, usuario } = req.body;

    try {
        await pool.query(
            'INSERT INTO material (titulo, tipo, contenido, usuario) VALUES ($1, $2, $3, $4)',
            [titulo, tipo, contenido, usuario]
        );
        res.status(201).json({ message: 'Material añadido exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al añadir material', error });
    }
});

app.get('/material', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM material ORDER BY fecha_publicacion DESC');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ message: 'Error al recuperar material', error });
    }
});

app.listen(5000, () => {
    console.log('Servidor corriendo en puerto 5000');
});
