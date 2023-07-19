const dotenv = require('dotenv');
const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening in port ${PORT}`));
