angular
	.module('myApp')
	.controller('RSVPCtrl', [
		'$scope',
		'eventData',
		function($scope, eventData) {


			/***
			 * Form submit function to email the event contact
			 */
			$scope.sendMail = function() {
				var link =  'mailto:' + $scope.event.contact +
							'&subject=' + $scope.event.title + ' RSVP' +
							'&body='; // + FORMATTED FORM RESULTS

				$location.href = link;
			};
		}
	]);