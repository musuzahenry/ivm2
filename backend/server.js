
require('dotenv').config(); // Load environment variables from .env
const express = require('express'); // import express
const cors = require('cors'); // import cors
const app = express();// initialize our app
app.use(cors()); // allow communication between back and front end through cors



//decalsrt port on which back end will run
const PORT = process.env.PORT

// Middleware to parse JSON
app.use(express.json());


//custom made moduls and routes
const videoRoutes = require('./routers/getVideos')


//Finally all our routes
app.use('/api/videos', videoRoutes) //get video routes

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});



