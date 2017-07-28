var mysql = require("mysql");

var connection = mysql.createConnection({
    port:3306,
    host:"localhost",
    user:"root",
    password:"cabbage",
    database:"eat_burgers"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id " + connection.threadId);
})

module.exports = connection;