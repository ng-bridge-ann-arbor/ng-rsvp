angular
	.module('myApp')
	.directive('rsvpForm', [
		function() {

			function _rsvpCtrl($scope) {
				$scope.guest = {};
				$scope.guest.guests = 1;

				/***
				 * Form submit function to email the event contact
				 */
				$scope.sendMail = function() {
					var windowFeatures = 'menubar=no,location=yes,resizable=yes,scrollbars=yes,status=yes,width=500,height=400,left=100,top=100',
						link = 'mailto:' + $scope.event.contact +
						'?subject=' + $scope.event.title + ' RSVP' +
						'&body='; // + FORMATTED FORM RESULTS

					window.open(link, 'EmailRSVP', windowFeatures);

					$scope.showForm = false;
				};

			}

			function _rsvpLink($scope, $elem, $attrs) {
				$scope.closeModal = function() {
					$scope.showForm = false;
				}
			}

			return {
				restrict: 'EA',
				scope: {
					event: '=',
					showForm: '='
				},
				templateUrl: 'ng-app/events/rsvp.tpl.html',
				controller: _rsvpCtrl,
				link: _rsvpLink
			}
		}
	]);