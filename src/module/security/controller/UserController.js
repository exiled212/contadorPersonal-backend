module.exports = {


	create(req, res){

		let httpResult = {};
		let data = req.body;

		console.log(data);

		httpResult.status= 'success';
		httpResult.code= 200;
		httpResult.data= {message:'hola'};

		res.status(200).send(httpResult);
	}


}