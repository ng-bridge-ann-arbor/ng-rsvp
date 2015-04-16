angular
	.module('myApp')
	.controller('EventDetailCtrl', [
		'$scope',
		'eventData',
		'$routeParams',
		function($scope, eventData, $routeParams) {
			var eventID = $routeParams.eid;

			$scope.showForm = false;

			$scope.launchModal = function() {
				$scope.showForm = true;
			};

			/***
			 * Fetch event data from local JSON
			 *
			 * @param {function} success callback function
			 * @returns {object} event data
			 */
			eventData.get(function(data) {
				$scope.event = data[eventID];

				console.log($scope.event);
			});
		}
	]);