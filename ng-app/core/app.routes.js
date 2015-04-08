/***
 * Routes
 *
 * Routing for our app
 * Enable HTML5 mode (to remove /# from URL)
 */

angular
	.module('myApp')
	.config(function($routeProvider, $locationProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'ng-app/rsvp/RSVP.view.html'
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