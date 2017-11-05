(()=>{

	require('rootpath')();

	const path = require('path');
	const express = require('express');

	const Security = require(path.join('src','module','security','router.js'));


	module.exports = function(app){


		app
			.use('/security', Security)
	}



})();