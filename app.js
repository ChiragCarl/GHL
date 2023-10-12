// app.js
const express = require('express');
const axios = require('axios');
const cors=require('cors');
const allContact=require('./routes/contact');
const listContact=require('./routes/allcontact');


const app=express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;


app.use('/api',allContact);
app.use('/api',listContact);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
