const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000; // Replace with your desired port

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const twilio = require('twilio');
require('dotenv').config();
// Your Twilio Account SID and Auth Token from twilio.com/console
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

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
    console.log("hh");
  const messageSid = req.body.MessageSid;
  const messageStatus = req.body.MessageStatus;

  console.log(`Received status update for message SID ${messageSid}: ${messageStatus}`);

  // You can handle the status update here as needed

  res.status(200).end(`Received status update for message SID ${messageSid}: ${messageStatus}`);
});
app.get("/send",(req,res)=>{
  client.messages
  .create({
    body: messageBody,
    from: twilioPhoneNumber,
    to: toPhoneNumber,
    statusCallback: statusCallbackUrl
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
