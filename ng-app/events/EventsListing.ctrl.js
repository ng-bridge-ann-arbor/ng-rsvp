angular
	.module('myApp')
	.controller('EventsListingCtrl', [
		'$scope',
		'eventData',
		function($scope, eventData) {
			eventData.get(function(data) {

				$scope.publicEvents = [];

				for (var eventID in data) {
					var thisEvent = data[eventID];

					if (thisEvent.public) {
						thisEvent['url'] = '/event/' + eventID;
						$scope.publicEvents.push(thisEvent);
					}
				}
			});
		}
	]);