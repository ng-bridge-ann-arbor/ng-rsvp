angular
	.module('myApp')
	.controller('EventDetailCtrl', [
		'$scope',
		'eventData',
		function($scope, eventData) {

			/***
			 * Fetch event data from local JSON
			 *
			 * @param {function} success callback function
			 * @returns {object} event data
			 */
			eventData.get(function(event) {
				console.log(event);

				// TODO: get form results and format them nicely for the email body

				$scope.event = event;

				/***
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