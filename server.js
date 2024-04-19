const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000; // Replace with your desired port

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const twilio = require('twilio');
const { MessagingResponse } = require('twilio').twiml;
require('dotenv').config();
// Your Twilio Account SID and Auth Token from twilio.com/console
const accountSid = "AC4a90824412dfa75796fba726ccbce1c3";
const authToken = "5d70fa8fc8daa9e82af64189ba941f9b";

// Create a Twilio client
const client = new twilio(accountSid, authToken);

// Your Twilio phone number
const twilioPhoneNumber = '+14435507227';

// The recipient's phone number
const toPhoneNumber = '+91 98799 86027'; // replace with the actual phone number

// The message you want to send
const messageBody = 'Hello, this is a test message from Twilio!';
const statusCallbackUrl = 'https://demo-project-w97j.onrender.com/twilio/status'; // replace with your server's URL

// Send the message

// Endpoint to handle Twilio status callbacks
app.post('/twilio/status', (req, res) => {
  console.log("hello")
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');
console.log("twiml:::",twiml)
  res.type('text/xml').send(twiml.toString());
});
app.get("/send",(req,res)=>{
  client.messages
  .create({
    body: messageBody,
    from: twilioPhoneNumber,
    to: toPhoneNumber,

  })
  .then((message) => res.send(message))
  .catch((error) => res.send(error.message));
})
app.get('/', (req, res) => {

  
    res.status(200).end("hello");
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
