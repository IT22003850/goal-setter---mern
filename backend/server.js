const express = require("express");
const dotenv = require('dotenv').config();
const goalRoutes = require('./routes/goalRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');
const colors = require('colors')
const connectDB = require('./config/db');

const port = process.env.PORT || 5000 ;

//mongoDb config
connectDB();

const app = express();

//middlewares to accept body data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/goals', goalRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is listning to port: ${port}`.blue);
});
