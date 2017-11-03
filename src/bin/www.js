(()=>{
	require('rootpath')();

	const path = require('path');
	const config = require(path.join('src','config.json'));

	let app = require(path.join('src','app.js'));

	app
		.set('port', (process.env.PORT || config.server.port))

		.listen(app.get('port'), function(){
			console.log(`Servidor Iniciado desde el puerto: ${app.get('port')}`);
		});



})();