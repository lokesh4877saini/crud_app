const mongoose = require('mongoose');
require('dotenv').config();
const db = process.env.dbUrl;
mongoose.connect(db).then(() =>console.log("connection with db success")).catch((e)=>console.log("connection fail",e));