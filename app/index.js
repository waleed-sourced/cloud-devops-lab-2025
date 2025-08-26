const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

// Connect to Postgres (env vars from Docker/Ansible)
const pool = new Pool({
  user: process.env.DB_USER || 'appuser',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'appdb',
  password: process.env.DB_PASS || 'apppassword',
  port: process.env.DB_PORT || 5432,
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Simple tasks API
app.get('/tasks', async (req, res) => {
  const result = await pool.query('SELECT * FROM tasks');
  res.json(result.rows);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
