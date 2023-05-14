const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('ema is busy shopping');
})

app.listen(port, () => {
    console.log(`ema john server running on port: ${port}`)
})

