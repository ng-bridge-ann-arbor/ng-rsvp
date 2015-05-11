angular
	.module('myApp')
	.controller('EventsCtrl', [
		'$scope',
		'eventData',
		function($scope, eventData) {
			// clear search query
			$scope.clearQuery = function() {
				$scope.query = undefined;
			};

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
		}
	]);