angular
	.module('myApp')
	.controller('RSVPCtrl', [
		'$scope',
		'eventData',
		'$routeParams',
		function($scope, eventData, $routeParams) {
			var _eventID = $routeParams.eid;

			/***
			 * Fetch event data from local JSON
			 *
			 * @param {function} success callback function
			 * @returns {object} event data
			 */
			eventData.get(function(data) {
				$scope.event = data[_eventID];

				console.log($scope.event);

				/***
				 * Form submit function to email the event contact
				 */
				$scope.sendMail = function() {
					var link =  'mailto:' + $scope.event.contact +
						'&subject=' + $scope.event.title + ' RSVP' +
						'&body='; // + FORMATTED FORM RESULTS

					$location.href = link;
				};

			});
		}
	]);