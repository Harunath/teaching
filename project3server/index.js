// Import required modules
// const express = require('express');
import express from "express"
// const cors = require('cors');
import cors from "cors"


// Create an Express application
const app = express();
const port = 3000; // Define the port to listen on


// Middleware to enable CORS
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended : true}))
// Define routes


app.get('/', (req, res) => {
  res.json("Welcome");
});

app.get('/colors', (req, res) => {
  res.json(["green","yellow","red","blue"]);
});

// Example route to handle POST requests with JSON data
app.post('/api/data', (req, res) => {
  const data = req.body; // Access JSON data sent in the request body
  console.log('Received data:', data);
  res.json({ message: 'Data received successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
