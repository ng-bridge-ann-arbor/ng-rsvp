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
				// TODO: this gets backwards / out of sync
				$scope.showForm = true;
				console.log('show form:', $scope.showForm);
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