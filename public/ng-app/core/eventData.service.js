/***
 * getData service
 *
 * Access the local data JSON to retrieve event data
 */

angular
	.module('myApp')
	.service('eventData', [
		'$http',
		function($http) {

			function _getJSDates(response) {
				var data = response.data;

				function _buildDate(date, hours, minutes) {
					var _timestamp = date.setHours(hours, minutes);

					return new Date(_timestamp);
				}

				angular.forEach(data, function(event, i) {
					var _jsDate = new Date(event.date);
					// start time
					var _startTimeArr = event.time.start.split(':');
					var _startTimeHours = _startTimeArr[0];
					var _startTimeMinutes = _startTimeArr[1];
					// end time
					var _endTimeArr = event.time.end.split(':');
					var _endTimeHours = _endTimeArr[0];
					var _endTimeMinutes = _endTimeArr[1];

					event.time.startDatetime = _buildDate(_jsDate, _startTimeHours, _startTimeMinutes);
					event.time.endDatetime = _buildDate(_jsDate, _endTimeHours, _endTimeMinutes);
				});

				return data;
			}

			function _error(error) {
				console.log('There was an error getting event data.');
			}

			this.get = function() {
				return $http
					.get('/ng-app/data/events.data.json')
					.then(_getJSDates, _error);
			};
		}
	]);