// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
import express from 'express'
import bodyParser from 'body-parser'
import  mongoose  from 'mongoose';
import routes from './routes';
// import connection from './models';
import connection from './utils/connection';
// const router = express.Router();
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// MongoDB connection
// mongoose.connect('mongodb://localhost/chatapp');



// Middleware for CORS (cross-origin resource sharing)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/',routes)
// app.get('/abc',(req, res)=>res.send('working'))
// app.get('/',(req, res)=>res.send('working'))
connection.on("connect", () => console.log("database connected successfully"));
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
