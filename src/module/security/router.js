(()=>{

	require('rootpath')();

	const path = require('path'); 
	const express = require('express');
	let router = express.Router();

	const UserController = require(path.join('src','module','security','controller','UserController.js'));
	router.post('/user', UserController.create);

	module.exports = router;

})();