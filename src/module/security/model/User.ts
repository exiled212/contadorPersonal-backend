
import { Model } from "./../../Model";
(()=>{
	
	require('rootpath')();
	const md5: any = require('md5');
	const path: any = require('path');

	class User extends Model {

		constructor(data){
			super();
			this.data = data;
			this.Model = this.db.define('user', {
				name: {
					type: this.Sequelize.STRING,
					unique: false,
					validate:{
						notNull: this._notNull,
						isAlpha:	{ msg:"Solo puede ingresar letras" },
					}
				},
				email: {
					type: this.Sequelize.STRING,
					unique: { msg: "El correo ya se encuentra registrado." },
					validate:{
						notNull: this._notNull,
						isEmail:	{ msg:"Debe ingresar un Correo Electronico." },
					}
				},
				password: {
					type: this.Sequelize.STRING,
					unique: false,
					validate:{
						notNull: this._notNull,
						md5(){
							this.password = md5(`password:${this.password}|email:${this.email}`)
						}
					}
				}
			});
		}

		private _notNull(value){
			if(value == null || value == undefined || value == ''){
				throw new Error('Este campo es obligatorio.');
			}
		}

		save(): any{
			return this.Model.sync({force:false})
				.then(()=>{
					return this.Model.create(this.data)
				})
		}

		updateTable(): any{
			return this.Model.sync({ force: true });
		}
	}
	module.exports = User;
})();