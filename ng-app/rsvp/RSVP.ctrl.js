/***
 * RSVP Controller
 *
 * Get app module
 * Setup controller with minification-safe injections
 *
 * @param $scope
 */

angular
	.module('myApp')
	.controller('RSVPCtrl', [
		'$scope',
		'getData',
		'$location',
		function($scope, getData, $location) {

			/***
			 * @function getData.eventData()
			 *
			 * Fetch event data from local JSON
			 *
			 * @param: success callback function
			 * @returns: event data
			 */
			getData.eventData(function(event) {
				console.log(event);

				// TODO: get form results and format them nicely for the email body

				$scope.event = event;

				/***
				 * @function sendMail()
				 *
				 * Form submit function to email the event contact
				 */
				$scope.sendMail = function() {
					var link =	'mailto:' + event.contact +
								'&subject=' + event.title + ' RSVP' +
								'&body='; // + FORMATTED FORM RESULTS

					$location.href = link;
				};
			});
		}
	]);