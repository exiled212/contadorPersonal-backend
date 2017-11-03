"use strict";
exports.__esModule = true;
require('rootpath')();
var path = require("path");
var Sequelize = require("sequelize");
var dbPath = path.join("src", "db.sqlite");
var Model = /** @class */ (function () {
    function Model() {
        var sequelize = new Sequelize("contador_personal", '', '', {
            dialect: "sqlite",
            storage: dbPath
        });
        sequelize
            .authenticate()
            .then(function () {
            console.log("Conectado");
        })["catch"](function (err) {
            console.log("Error: " + err);
        });
        this.db = sequelize;
        this.Sequelize = Sequelize;
    }
    return Model;
}());
exports.Model = Model;
