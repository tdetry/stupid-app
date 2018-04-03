const express = require('express');

const morgan = require('morgan');

const app = express();

// Basic loggin
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.json({ response: 'Hello from backend' })
});

// Basic 404 handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Basic error handler
app.use((err, req, res, next) => {
  res.status(500).send(err.response || 'Something broke!');
});

// Starting
app.listen(5002, '0.0.0.0', () => console.log('Backend app listening on port 3000!'));
