# ng-rsvp

A simple, backend-less AngularJS single-page application that emails an organizer event RSVP responses.

## Setup and Requirements

* The app has a built-in node server to serve the files for the app
 * Node is not required, any server than can serve static resources can be used instead.

**To setup the node server**
* Clone the files to your local machine using git
* Run `npm install` to install the dependencies
* Type `npm start` to run the server

## Event JSON Format

**/public/ng-app/data/events.data.json**

```
"a01": {
    "title": "My Special Event",
    "date": "June 12, 2015",
    "time": {
      "start": "13:00",
      "end": "17:30"
    },
    "description": "<p>A very special occasion that I'd like to celebrate with you!</p><p>Please come and be part of this special event with me.</p>",
    "public": true,
    "rsvp": true,
    "location": "1234 Some St",
    "contact": "me@email.com"
  },
``` 

* Event object ID `string`, alphanumeric, unique
  * title `string`
  * date `string`, can be parsed by [Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)
  * time `object`
    * start `string` in 24 hour time 
    * end `string` in 24 hour time 
  * description `string`, can contain simple `HTML`
  * public `boolean`, indicates if event should be listed on main page
  * rsvp `boolean`, show RSVP form
  * location `string`
  * contact `string`, email address to send RSVPs to
   

## To Do

- [ ] Add instructional commenting to files
