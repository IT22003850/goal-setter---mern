const express = require("express");
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000 ;

const app = express();

app.get('/api/goals', (req, res) => {
    console.log('goals');
    res.status(201).send('goals');
    
});

app.listen(port, () => {
  console.log(`server is listning to port: ${port}`);
});
