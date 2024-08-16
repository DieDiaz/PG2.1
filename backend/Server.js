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
                res.json({ token });
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

app.listen(5000, () => {
    console.log('Servidor corriendo en puerto 5000');
});
