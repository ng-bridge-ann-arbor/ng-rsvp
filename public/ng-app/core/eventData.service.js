/***
 * getData service
 *
 * Access the local data JSON to retrieve event data
 */

angular
	.module('myApp')
	.service('eventData', [
		'$http',
		function($http) {
			this.get = function(callback) {
				return $http
					.get('/ng-app/data/events.data.json')
					.success(callback)
					.error(function() { console.log('There was an error getting event data.'); });
			};
		}
	]);