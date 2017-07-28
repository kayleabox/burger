var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    create: function(objvals, cb){
        orm.create("burgers", objvals, function(res){
            cb(res);
        });
    },
    update: function(objvals, condition, cb){
        orm.update("burgers", objvals, condition, function(res){
            cb(res);
        });
    },
    delete: function(condition, cb){
        orm.delete("burgers", condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;
