const mongoose = require('mongoose');
const env = require('dotenv');

env.config();
const connectionString = process.env.CONNECTION_STRING;

const connectDB = async ()=>{

    try {
        const connect = await mongoose.connect(connectionString);
        console.log('connected to database: ', connect.connection.host, connect.connection.name);
        
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }

}

module.exports = connectDB;