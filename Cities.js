const e = require("express");
const mysql = require('mysql');
const connection = require('./App');
async function get_data(req,res)
{
    const query = 'SELECT name, id FROM cities';
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error executing query: ' + error.message);
        res.status(500).send('Error retrieving data');
        return;
      }
        res.json(results);
    });
}
async function add_data(req,res,next)
{
    const {name, id} = req.query;
  const query = 'INSERT INTO cities (name, id) VALUES (?, ?)';
  connection.query(query, [name, id], (error, results) => {
    if (error) {
      console.error('Error executing query: ' + error.message);
      res.status(500).send('Error adding data');
      return;
    }
    res.send('Data added successfully !');
  });
}
async function delete_data(req,res)
{
    const { id } = req.query;
    const query = 'DELETE FROM cities WHERE  id = ?';
    connection.query(query, [id], (error, results) => 
    {
        if (error) 
        {
          console.error('Error executing query: ' + error.message);
          res.status(500).send('Error deleting data');
          return;
        }
        res.send('Data deleted successfully!');
    });

}


module.exports={get_data,add_data,delete_data}