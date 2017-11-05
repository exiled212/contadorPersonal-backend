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
    var md5 = require('md5');
    var path = require('path');
    var User = /** @class */ (function (_super) {
        __extends(User, _super);
        function User(data) {
            var _this = _super.call(this) || this;
            _this.data = data;
            _this.Model = _this.db.define('user', {
                name: {
                    type: _this.Sequelize.STRING,
                    unique: false,
                    validate: {
                        notNull: _this._notNull,
                        isAlpha: { msg: "Solo puede ingresar letras" }
                    }
                },
                email: {
                    type: _this.Sequelize.STRING,
                    unique: { msg: "El correo ya se encuentra registrado." },
                    validate: {
                        notNull: _this._notNull,
                        isEmail: { msg: "Debe ingresar un Correo Electronico." }
                    }
                },
                password: {
                    type: _this.Sequelize.STRING,
                    unique: false,
                    validate: {
                        notNull: _this._notNull,
                        md5: function () {
                            this.password = md5("password:" + this.password + "|email:" + this.email);
                        }
                    }
                }
            });
            return _this;
        }
        User.prototype._notNull = function (value) {
            if (value == null || value == undefined || value == '') {
                throw new Error('Este campo es obligatorio.');
            }
        };
        User.prototype.save = function () {
            var _this = this;
            return this.Model.sync({ force: false })
                .then(function () {
                return _this.Model.create(_this.data);
            });
        };
        User.prototype.updateTable = function () {
            return this.Model.sync({ force: true });
        };
        return User;
    }(Model_1.Model));
    module.exports = User;
})();
