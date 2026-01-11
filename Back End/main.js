const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const env = require('dotenv');
const cors = require('cors'); // Add this

const contactRouter = require('./Router/Contact');

// Middleware
app.use(cors()); // Add this line
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
env.config();

app.use(contactRouter);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
