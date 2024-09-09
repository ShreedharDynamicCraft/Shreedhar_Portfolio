const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// Middleware to parse JSON and url-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Define an endpoint to receive form submissions
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill out all fields before submitting the form.' });
  }

  if (message.split(' ').filter(Boolean).length < 15) {
    return res.status(400).json({ success: false, message: 'Please enter at least 15 words in the message.' });
  }

  // Here, you can save the form data to a database or send it via email
  // You can also add any additional processing or validation here

  // Send a response back to the client
  res.status(200).json({ success: true, message: 'Form submitted successfully! We will get back to you soon.' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

