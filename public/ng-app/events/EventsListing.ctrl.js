angular
	.module('myApp')
	.controller('EventsListingCtrl', [
		'$scope',
		'eventData',
		function($scope, eventData) {
			$scope.clearQuery = function() {
				$scope.query = undefined;
			};

			eventData.get().then(function(data) {
				$scope.events = [];

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