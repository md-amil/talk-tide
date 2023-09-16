// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
import express from 'express'
import bodyParser from 'body-parser'
import  mongoose  from 'mongoose';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/chatapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Message = mongoose.model('Message', {
  user: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

// Middleware for CORS (cross-origin resource sharing)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Route to get all messages
app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to send a new message
app.post('/messages', async (req, res) => {
  const { user, message } = req.body;
  if (user && message) {
    try {
      const newMessage = new Message({ user, message });
      await newMessage.save();
      res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
