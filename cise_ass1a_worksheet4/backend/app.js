// app.js
const express = require('express');
const connectDB = require('./config/db');
const articles = require('./routes/api/articles');
const app = express();
const cors = require('cors');
// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/articles', articles);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));