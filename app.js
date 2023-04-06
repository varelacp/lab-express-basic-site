const express = require('express');

// Creating a server called app
const app = express();

// Tell express to make public folder available
app.use(express.static('public', { extensions: ['html', 'css'] }));

// Tell express to use views
app.set('views', __dirname + '/views');

//Route http://localhost:3000/home
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/views/home.html');
});

//Route http://localhost:3000/about
app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/public/views/about.html');
});

//Route http://localhost:3000/works
app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/public/views/works.html');
});

app.listen(3000, () => console.log('Listening on port: 3000'));
