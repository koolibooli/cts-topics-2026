const express = require('express');
const app = express();
const port = 8080;

// Define a route for GET requests to the root URL
app.get('/about', (req, res) => {
    res.send('About Page');
});

app.post('/submit', (req, res) => {
    res.send('Form Submitted');
});
// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});