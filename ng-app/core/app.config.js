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
					templateUrl: 'ng-app/home/Home.view.html',
					controller: 'HomeCtrl'
				})
				.when('/events', {
					templateUrl: 'ng-app/events/EventsListing.view.html',
					controller: 'EventsListingCtrl'
				})
				.when('/event/:eid', {
					templateUrl: 'ng-app/events/EventDetail.view.html',
					controller: 'EventDetailCtrl'
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