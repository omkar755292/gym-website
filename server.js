const express = require('express');
const path = require('path');
const env = require('dotenv');
const router = require('./routes/router');
const connectDB = require('./config/connectionDB');
const errorHandler = require('./middleware/errorHandler');

env.config(); // Configuring Hostname and Port form dotenv file
const hostname = process.env.HOSTNAME || "localhost";
const port = process.env.PORT || 3000;

connectDB();
const app = express(); // Creating express app

// SettingUp middleware
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/api/contact', router);
app.use(errorHandler);

// Starting a Server
app.listen(port, (req, res)=>{
    console.log(`server is listening on http://${hostname}:${port}`)
});