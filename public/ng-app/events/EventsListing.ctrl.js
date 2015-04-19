angular
	.module('myApp')
	.controller('EventsListingCtrl', [
		'$scope',
		'eventData',
		function($scope, eventData) {
			eventData.get(function(data) {
				$scope.events = [];

				$scope.clearQuery = function() {
					$scope.query = undefined;
				};

				for (var eventID in data) {
					var thisEvent = data[eventID];

					// TODO: change to a filter
					if (thisEvent.public) {
						thisEvent.url = '/event/' + eventID;
						$scope.events.push(thisEvent);
					}
				}
			});
		}
	]);