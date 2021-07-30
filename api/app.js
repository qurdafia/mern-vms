const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


// Middleware
app.use(cors());
app.use(express.json());

// Routes
const visitsRoute = require('./routes/visits');
app.use('/visits', visitsRoute);
app.get('/', (req, res) => {
    res.send('This is the homepage');
});

// DB
mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('Connected to the MongoDB!')
);

// SERVING IN PORT 5000
app.listen(5000);