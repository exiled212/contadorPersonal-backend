"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Model_1 = require("./../../Model");
(function () {
    require('rootpath')();
    var path = require('path');
    var User = /** @class */ (function (_super) {
        __extends(User, _super);
        function User() {
            var _this = _super.call(this) || this;
            _this.Model = _this.db.define('user', {
                name: {
                    type: _this.Sequelize.STRING,
                    allowNull: false,
                    unique: false
                },
                email: {
                    type: _this.Sequelize.STRING,
                    allowNull: false,
                    unique: true
                },
                password: {
                    type: _this.Sequelize.STRING,
                    allowNull: false,
                    unique: false
                }
            });
            return _this;
        }
        User.prototype.create = function (data) {
            return this.Model.create(data);
        };
        User.prototype.updateTable = function () {
            return this.Model.sync({ force: true });
        };
        return User;
    }(Model_1.Model));
    module.exports = User;
})();
