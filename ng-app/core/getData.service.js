angular
	.module('myApp')
	.service('getData', [
		'$http',
		function($http) {
			this.eventData = function(callback) {
				return $http
					.get('/ng-app/data/event.data.json')
					.success(callback)
					.error(function() { console.log('There was an error getting event data.'); });
			}
		}
	]);