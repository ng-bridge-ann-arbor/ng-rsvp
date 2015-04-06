/***
 * Routes
 *
 * @getter: call module we defined in startup.js 'myApp'
 * @config function (inject dependencies)
 * 	- routing for our app
 * 	- enable HTML5 mode (to remove /# from URL)
 *
 */

angular
	.module('myApp')
	.config(function($routeProvider, $locationProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'ng-app/home/Home.view.html'
				})
				.otherwise({
					redirectTo: '/'
				});
			$locationProvider
				.html5Mode({
					enabled: true
				})
				.hashPrefix('!');
		}
	);