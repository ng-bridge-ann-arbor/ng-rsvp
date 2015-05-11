angular
	.module('myApp')
	.controller('EventDetailCtrl', [
		'$scope',
		'eventData',
		'$routeParams',
		function($scope, eventData, $routeParams) {
			var eventID = $routeParams.eid;

			$scope.showForm = false;

			// show the RSVP modal
			$scope.launchModal = function() {
				$scope.showForm = true;
			};

			// get data for this event
			eventData.get().then(function(data) {
				$scope.event = data[eventID];
			});
		}
	]);