const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Customer_Records',
    password: '6606',
    port: 5432,
});

// Enable CORS for all requests
app.use(cors());

app.get('/api/Customer_Records', async (req, res) => {
    try {
        const query = 'SELECT * FROM customer';
        const { rows } = await pool.query(query);
        res.json(rows);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
