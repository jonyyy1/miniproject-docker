const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;

// MongoDB connection
mongoose.connect('mongodb://db:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', (req, res) => {
  res.send('Hello, Docker!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});