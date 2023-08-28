const express = require('express');
const cors = require('cors');
const sendEmail = require('./src/send-email');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/send-email', sendEmail);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
