//include module mysql downloaded from npm
const mysql = require('mysql');

//Create connection to the database
//Have to hide the username and password for security purposes
const connection = mysql.createConnection({
    //creating objects
    host: "sql2.freesqldatabase.com",
    user: "sql2374010",
    password: "zI2!aN4%",
    database: "sql2374010"
  });

//create a server object:
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected Database!")
});


//MySQL query
//var sql = "INSERT INTO players (username, email, score, password) VALUES ('jl69_3', 'jl693@email.com', 5, '1234')";
var sql = "Select * from players";

// run SQL (variable) query 
connection.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});

module.exports = connection;