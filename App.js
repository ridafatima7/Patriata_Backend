const express = require('express');
const http=require('http');
const mysql = require('mysql');
const fs=require('fs');
try {
    const express = require('express');
    console.log('Express.js is installed.');
   } 
   catch (error) {
    console.error('Express.js is not installed.');
   }

const app = express();
const cors = require('cors');
// const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const dbConfig = {
    host: 'penguin',
    user: 'root',
    password: 'butthina445@==',
    database: 'patriata',
  };
  const connection = mysql.createConnection(dbConfig);
  module.exports = connection;
  connection.connect(function(err) {
    if (err) 
    {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});
const CitiesRouter=require('./Routes')
const routes_Router=require('./Routes_Cities')
const timings_Router=require('./Routes_timings')
const prices_Router=require('./Routes_prices')

app.use(cors());
app.use('/cities',CitiesRouter);
app.use('/routes',routes_Router);
app.use('/timings',timings_Router);
app.use('/prices',prices_Router);
const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});