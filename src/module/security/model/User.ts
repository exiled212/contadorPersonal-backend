
import { Model } from "./../../Model";
(()=>{
	
	require('rootpath')();
	const path: any = require('path');

	class User extends Model {
		Model: any;
		constructor(){
			super();
			this.Model = this.db.define('user', {
				name: {
					type: this.Sequelize.STRING,
					allowNull: false,
					unique: false
				},
				email: {
					type: this.Sequelize.STRING,
					allowNull: false,
					unique: true
				},
				password: {
					type: this.Sequelize.STRING,
					allowNull: false,
					unique: false
				}
			});
		}

		create(data): any{
			return this.Model.create(data)
		}

		updateTable(): any{
			return this.Model.sync({ force: true });
		}
	}
	module.exports = User;
})();