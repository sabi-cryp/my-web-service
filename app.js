// Import necessary modules
const express = require('express');
const mysql = require('mysql2');

// Create an Express application
const app = express();
const port = 30001;

// Set up MySQL connection
const connection = mysql.createConnection({
  host: '192.168.80.2', // Docker container name
  user: 'dockeruser',
  password: 'docker',
  database: 'api',
  port: 3306,
});

// Check if the connection to MySQL is successful
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Array of client data
const clients = [
  { id: 1, name: 'Sabrina', email: 'sabrina@example.com' },
  { id: 2, name: 'Aymen', email: 'aymen@example.com' },
  { id: 3, name: 'Mehdi', email: 'mehdi@example.com' },
];

// Define a route to get clients
app.get('/get_clients', (req, res) => {
  res.json(clients);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
