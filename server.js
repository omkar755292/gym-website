const express = require('express');
const env = require('dotenv');
const path = require('path');
const connectDB = require('./config/dbConnetion');
const router = require('./routes/router');
const errorHandler = require('./middleware/errorHandler');

env.config(); // Configuring Hostname and Port form dotenv file
const hostname = process.env.HOSTNAME || "localhost";
const port = process.env.PORT || 3000;

connectDB();
const app = express(); // Creating express app

// SettingUp middleware 
app.use(express.json());
app.use('/api/contact', router);
app.use(errorHandler);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Starting a Server
app.listen(port, (req, res)=>{
    console.log(`server is listening on http://${hostname}:${port}`)
});