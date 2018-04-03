const express = require('express');

const request = require('request');

const morgan = require('morgan');

const app = express();

const backendUrl = 'http://localhost:3000'
//const fooServiceUrl = `http://${process.env.FOO_SERVICE_HOST}:${process.env.FOO_SERVICE_PORT}`

// Basic loggin
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/backend', (req, res) => {
  request.get(backendUrl, (err, response, body) => {
    if (err) {
      res.send(`No reponse from backend: ${err}`)
      return
    }
    //console.log(response.statusCode)
    res.send(`Backend responded with ${body}`)
  })
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
app.listen(5000, '0.0.0.0', () => console.log('Frontend app listening on port 5000!'));
