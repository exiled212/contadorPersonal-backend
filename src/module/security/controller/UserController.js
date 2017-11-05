(()=>{
	require('rootpath')();
	const path = require('path');
	const User = require(path.join('src','module','security','model','User.js'));
	
	module.exports = {
		create(req, res){

			let httpResult = {};
			let data = req.body;

			let user = new User(data);

			user.save()
				.then(result=>{
					console.log('a');
				})
				.catch(error=>{
					console.log('b');
					error.errors.map(error=>{
						let message = `Error: ${error.message} - campo: ${error.path} - valor: ${error.value}`;
						console.log(message);
					})
				})

			httpResult.status= 'success';
			httpResult.code= 200;
			httpResult.data= {message:'hola'};

			res.status(200).send(httpResult);
		}
	}
})();
