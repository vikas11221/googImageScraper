; (function () {


	/**
	 * Place to store API URL or any other constants
	 * Usage:
	 *
	 * Inject CONSTANTS service as a dependency and then use like this:
	 * CONSTANTS.API_URL
	 */
	angular
		.module('boilerplate')
		.constant('CONSTANTS', {
			'API_URL': 'https://googleimagesscrapper.herokuapp.com',
			'LOCAL_API_URL': 'http://localhost:4000',
			'PRODUCTION_API_URL': 'https://googleimagesscrapper.herokuapp.com'
		});


})();
