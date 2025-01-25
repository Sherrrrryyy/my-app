const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const authRoutes = require('./routes/authRoutes')

const dbConnect = require('./config/dbConnect')

dbConnect();

const app = express()

//Middlewrae
app.use(express.json())

//Routes
app.use("/api/auth", authRoutes)


//Start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> {
    console.log(`Server is running at port ${PORT}`);
    
})