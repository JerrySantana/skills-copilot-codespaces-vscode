// Create web server
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
// Create MySQL connection
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'comments'
});
// Connect to MySQL
connection.connect();
// Create the database if it does not exist
connection.query('CREATE DATABASE IF NOT EXISTS comments', function (error, results, fields) {
    if (error) throw error;
});
// Create the table if it does not exist
connection.query('CREATE TABLE IF NOT EXISTS comments.comments (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), comment TEXT)', function (error, results, fields) {
    if (error) throw error;
});
// Create a new comment
app.get('/api/comment', function (req, res) {
    var name = req.query.name;
    var comment = req.query.comment;
    connection.query('INSERT INTO comments.comments (name, comment) VALUES (?, ?)', [name, comment], function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});
// Get all comments
app.get('/api/comments', function (req, res) {
    connection.query('SELECT * FROM comments.comments', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});
// Start the server
app.listen(3000, function () {
    console.log('Server is listening on port 3000.');
});
// End of filen