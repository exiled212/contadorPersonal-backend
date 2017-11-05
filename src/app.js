(()=>{

	require('rootpath');

	const 	path 			= 	require('path');
	const 	express 		= 	require('express');
	const 	bodyParser		=	require('body-parser');
	const	methodOverride	=	require('method-override');
	const	cors			=	require('cors');

	var app = express();

	app
		.use(bodyParser.urlencoded({extended: true}))
		.use(bodyParser.json())
		.use(methodOverride())
		.use(cors())
		.options('*', cors())


	require(path.join('src','module','router.js'))(app);

	module.exports = app;

})();