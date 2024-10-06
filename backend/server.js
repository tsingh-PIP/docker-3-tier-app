const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 5000;

// MySQL connection
const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'mydb'
});

// Check backend-database connection
app.get('/', (req, res) => {
  db.query('SELECT NOW() as time', (err, result) => {
    if (err) {
      res.status(500).send('Error connecting to database');
    } else {
      res.send(`Backend connected to database! Current time in db: ${result[0].time}`);
    }
  });
});


// Start server
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
