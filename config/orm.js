
//why does this require ../config to access the file 
//if they are in the same folder
var connection = require("../config/connection.js");

var orm = {
    all: function(table, cb){
        var query = "SELECT * FROM " + table + ";";
        connection.query(query, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    create: function(table, objvals, cb){
        var query = "INSERT INTO " + table + " SET ?;";
        connection.query(query, objvals, function(err, result){
            if(err) throw err;
            cb(result);
        })

    },
    update: function(table, objvals, condition, cb){
        var query = "UPDATE " + table + " SET ? WHERE " + condition + ";";
        connection.query(query, objvals, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    delete: function(table, condition, cb){
        var query = "DELETE FROM " + table + " WHERE " + condition + ";";
        connection.query(query, condition, function(err, result){
            if(err) throw err;
            cb(result);
        })
    }
}


module.exports = orm;