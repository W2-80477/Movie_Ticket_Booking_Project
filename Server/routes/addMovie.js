// Import necessary modules
const express = require('express');
const mysql = require('mysql');
const config = require('config');
const jwt = require('jsonwebtoken');
const app = express.Router();

// Create MySQL connection
const connectionDetails = mysql.createConnection({
  host: config.get("SERVER"),
  database: config.get("DATABASE"),
  user: config.get("USER"),
  password: config.get("PASSWORD"),
});

// Middleware to check if the user is authenticated as an admin
const authenticateAdmin = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    if (decoded.role !== 'admin') {
      return res.status(403).json({ msg: 'Access forbidden. Admin credentials required.' });
    }

    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

// Route for admin login
app.post('/', (req, res) => {
    let connection = mysql.createConnection(connectionDetails);

    let { movie_id, title, description, duration, language, release_date } = request.body;   
    
    let statement = 
        `insert into movies values(${movie_id}, '${title}','${description}','${duration}','${language}','${release_date}')`;

    connection.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(error));
            connection.end();
            response.end();
        }
});

});

// Route for adding movies (accessible only by admins)
app.post('/add-movie', authenticateAdmin, (req, res) => {
  // Extract movie details from the request body
  const { title, director, releaseDate } = req.body;

  // Validate and add the movie to the database
  connectionDetails.query(
    'INSERT INTO movies (title, director, release_date) VALUES (?, ?, ?)',
    [title, director, releaseDate],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }

      // Movie added successfully
      res.status(201).json({ msg: 'Movie added successfully' });
    }
  );
});

module.exports = app;
