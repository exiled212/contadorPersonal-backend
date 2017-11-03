(()=>{

	require('rootpath')();

	const path = require('path'); 
	const express = require('express');

	const UserController = require(path.join('src','module','security','controller','UserController.js'));

	let router = express.Router();

	router.post('/create', UserController.create);

	module.exports = router;

})();