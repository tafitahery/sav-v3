const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
app.use(express.json());

app.listen(8800, () => {
  console.log('Backend is running on port 8800');
});
