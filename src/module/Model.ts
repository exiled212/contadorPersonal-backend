require('rootpath')();
const path: any = require("path");
const Sequelize: any = require("sequelize");
const dbPath: string = path.join("src", "db.sqlite");

export class Model {
	db;
	Sequelize;
	Model: any;
	data: {};
	constructor() {
		let sequelize: any = new Sequelize("contador_personal", '','', {
			dialect: "sqlite",
			storage: dbPath
		});
		sequelize
			.authenticate()
				.then(() => {
					console.log("Conectado");
				})
				.catch(err => {
					console.log(`Error: ${err}`);
				});
		this.db = sequelize;
		this.Sequelize = Sequelize;
	}
}