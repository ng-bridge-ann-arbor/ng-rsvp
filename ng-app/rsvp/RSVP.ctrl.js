angular
	.module('myApp')
	.controller('RSVPCtrl', [
		'$scope',
		'eventData',
		'$routeParams',
		'$window',
		function($scope, eventData, $routeParams, $window) {
			var eventID = $routeParams.eid;

			$scope.guest = {};
			$scope.guest.guests = 1;

			/***
			 * Fetch event data from local JSON
			 *
			 * @param {function} success callback function
			 * @returns {object} event data
			 */
			eventData.get(function(data) {
				$scope.event = data[eventID];

				console.log($scope.event);

				/***
				 * Form submit function to email the event contact
				 */
				$scope.sendMail = function() {
					var link = 'mailto:' + $scope.event.contact +
						'?subject=' + $scope.event.title + ' RSVP' +
						'&body='; // + FORMATTED FORM RESULTS

					$window.location.href = link;
				};

			});
		}
	]);