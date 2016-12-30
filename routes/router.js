// variáveis
var ctrlIndex   = require('../controllers/index'),
	ctrlSegredo = require('../controllers/segredo'),
	ctrlAuth    = require('../controllers/auth'),
	ctrlRequest = require('../controllers/request');

module.exports = function(apiRoutes){

	// raiz da api
    apiRoutes.get('/', ctrlIndex.index);
	
	// autenticação
    apiRoutes.use(ctrlAuth.auth);

	// segredo
    apiRoutes.get('/segredo', ctrlSegredo.segredo);
    
	// novo segredo
    apiRoutes.post('/segredo', ctrlSegredo.novoSegredo);

	// 404
	apiRoutes.use(ctrlRequest.badRequest);

}