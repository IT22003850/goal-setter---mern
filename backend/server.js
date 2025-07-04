const express = require("express");
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000 ;
const goalRoutes = require('./routes/goalRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');

const app = express();

//middlewares to accept body data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/goals', goalRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is listning to port: ${port}`);
});
