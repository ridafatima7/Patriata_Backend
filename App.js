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
// const myserver=http.createServer((req,res)=>{
//   res.setHeader('Content-Type', 'text/plain');
//   const log='${Date.now()}:${req.url}New Request Received\n';
//   fs.appendFile('log.txt',log,(err,data)=>{
//     switch(req.url){
//       case '/':
//       res.writeHead(200);
//       res.end('Homepage');
//       break
 
//       case '/about':
//       res.writeHead(200);
//       res.end('i am rida fatima');
//       break
//       default:
//         res.writeHead(404);
//       res.end('404 Not Found');
//     }
//   })
 
// });
// myserver.listen(8007,()=> console.log('Server started'));
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
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});
const CitiesRouter=require('./Routes')
const routes_Router=require('./Routes_Cities')
app.use(cors());
// app.use(function(req, res, next) {
//   next(createError(404));
// });
app.use('/cities',CitiesRouter);
app.use('/routes',routes_Router);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});