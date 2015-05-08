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

			eventData.get().then(function(data) {
				$scope.event = data[eventID];

				console.log($scope.event);
			});
		}
	]);