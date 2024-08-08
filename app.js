const express = require('express')
const app = express();
const router = require('./Routes/router');
const cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use(express.json());
// connection
require('./DB/connect')
const port = process.env.PORT||5000;
// route
app.use(router);
app.listen(port,()=>{
    console.log(`server is http://localhost:${port}`)
})