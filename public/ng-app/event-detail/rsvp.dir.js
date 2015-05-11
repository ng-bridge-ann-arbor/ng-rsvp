angular
	.module('myApp')
	.directive('rsvpForm', [
		function() {

			// rsvpForm controller function
			function rsvpCtrl($scope) {
				$scope.guest = {};
				$scope.guest.guests = 1; // default number of guests to 1
			}

			// rsvpForm link function
			function rsvpLink($scope, $elem, $attrs) {
				// format the email body for display in the visitor's email client
				function formatEmailBody(formObj) {
					var emailBodyStr;

					emailBodyStr = 'Name: ' + formObj.name + '\n';
					emailBodyStr += 'Attending: ' + (formObj.attending ? 'Yes' : 'No') + '\n';
					emailBodyStr += formObj.attending ? '# of attendees: ' + formObj.guests + '\n' : '';
					emailBodyStr += '\n' + 'Comments: ' + formObj.comments;

					return encodeURI(emailBodyStr);
				}

				// form submit function to email the event contact
				$scope.sendMail = function() {
					var windowFeatures = 'menubar=no,location=yes,resizable=yes,scrollbars=yes,status=yes,width=500,height=400,left=100,top=100',
						link = 'mailto:' + $scope.event.contact +
						'?subject=' + $scope.event.title + ' RSVP' +
						'&body=' + formatEmailBody($scope.guest);

					window.open(link, 'EmailRSVP', windowFeatures);

					$scope.showForm = false;
				};

				// close the RSVP modal window
				$scope.closeModal = function() {
					$scope.showForm = false;
				};
			}

			return {
				restrict: 'EA',
				scope: {
					event: '=',
					showForm: '='
				},
				templateUrl: 'ng-app/event-detail/rsvp.tpl.html',
				controller: rsvpCtrl,
				link: rsvpLink
			};
		}
	]);