const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const tourRoute = require('./routes/tourRoute');
const userRoute = require('./routes/userRoute');
dotenv.config({ path: '.env' });

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON request bodies
app.use(express.json());

// Connecting to the database
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB connection successful!');
    app.listen(PORT, () => {
      console.log(`Tour app listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('DB connection failed:', err.message);
  });

app.get('/', (req, res) => res.send('Hello World from overview /'));

// Mount the tourRoute as a middleware under the '/api/v2/tours' path
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
