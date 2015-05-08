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

			// build JS dates and add them to the data
			function _getJSDates(response) {
				var data = response.data;

				// take a Date, hours, and minutes and create a new Date object
				function _buildDate(date, hours, minutes) {
					var _timestamp = date.setHours(hours, minutes);

					return new Date(_timestamp);
				}

				// iterate over each event in data
				// add Date object for start date/time and end date/time
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

			// error getting data
			function _error(error) {
				console.log('There was an error getting event data.');
			}

			// returns {function} $http promise
			this.get = function() {
				return $http
					.get('/ng-app/data/events.data.json')
					.then(_getJSDates, _error);
			};
		}
	]);