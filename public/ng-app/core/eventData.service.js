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
			function getJSDates(response) {
				var data = response.data;
				var now = new Date().getTime();

				// take a Date, hours, and minutes and create a new Date object
				function buildDate(date, hours, minutes) {
					var timestamp = date.setHours(hours, minutes);

					return new Date(timestamp);
				}

				// iterate over each event in data
				// add Date object for start date/time and end date/time
				angular.forEach(data, function(event) {
					var jsDate = new Date(event.date);
					// start time
					var startTimeArr = event.time.start.split(':');
					var startTimeHours = startTimeArr[0];
					var startTimeMinutes = startTimeArr[1];
					var startDatetime = buildDate(jsDate, startTimeHours, startTimeMinutes);
					// end time
					var endTimeArr = event.time.end.split(':');
					var endTimeHours = endTimeArr[0];
					var endTimeMinutes = endTimeArr[1];
					var endDatetime = buildDate(jsDate, endTimeHours, endTimeMinutes);
					// event is in the future
					var upcoming = now < startDatetime.getTime();

					event.time.startDatetime = startDatetime;
					event.time.endDatetime = endDatetime;
					event.upcoming = upcoming;
					event.rsvp = !upcoming ? upcoming : event.rsvp;
				});

				return data;
			}

			// error getting data
			function error() {
				console.log('There was an error getting event data.');
			}

			// returns {promise}
			this.get = function() {
				return $http
					.get('/ng-app/data/events.data.json')
					.then(getJSDates, error);
			};
		}
	]);