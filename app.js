require("dotenv").config();

const express = require('express');
const mongoose = require('./Config/db');
const app = express();

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended: true}));

app.use("/", require('./Routes'))

app.listen(process.env.PORT, function(){
    console.log(`Server listening on port ${process.env.PORT}`)
})

