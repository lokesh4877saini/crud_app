require('dotenv').config();
const express = require('express')
const app = express();
const router = require('./Routes/router');
const cors = require('cors');
app.use(cors());
app.use(express.json());
require('./DB/connect')
const port = process.env.PORT || 5000;
app.use(router);
app.listen(port, () => {
    console.log(`server is http://localhost:${port}`)
})