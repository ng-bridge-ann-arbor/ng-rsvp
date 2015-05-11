angular
	.module('myApp')
	.controller('EventsCtrl', [
		'$scope',
		'eventData',
		'$location',
		function($scope, eventData, $location) {
			// get event data and add URL / show public
			eventData.get().then(function(data) {
				$scope.events = [];

				for (var eventID in data) {
					var thisEvent = data[eventID];

					if (thisEvent.public) {
						thisEvent.url = '/event/' + eventID;
						$scope.events.push(thisEvent);
					}
				}
			});

			// link the table rows to event detail URL
			$scope.linkRow = function(eventPath) {
				$location.path(eventPath);
			};
		}
	]);