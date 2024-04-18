const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000; // Replace with your desired port

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const twilio = require('twilio');
require('dotenv').config();


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
