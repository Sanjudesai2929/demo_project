const twilio = require('twilio');

// Your Twilio Account SID and Auth Token from twilio.com/console
const accountSid = 'ACa0774e852f6ea56f2426a8790b050825';
const authToken = 'd5e561c7a690629890a0bb49bc4ba69a';

// Create a Twilio client
const client = new twilio(accountSid, authToken);

// Your Twilio phone number
const twilioPhoneNumber = '+19497614012';

// The recipient's phone number
const toPhoneNumber = '+91 95107 95391'; // replace with the actual phone number

// The message you want to send
const messageBody = 'Hello, this is a test message from Twilio!';

// Send the message
client.messages
  .create({
    body: messageBody,
    from: twilioPhoneNumber,
    to: toPhoneNumber,
  })
  .then((message) => console.log(`Message sent with SID: ${message.sid}`))
  .catch((error) => console.error(`Error sending message: ${error.message}`));
