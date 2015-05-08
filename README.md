# ng-rsvp

A simple, backend-less AngularJS single-page application that emails an organizer event RSVP responses.

## Setup and Requirements

* The app has a built-in node server to serve the files for the app
 * Node is not required, any server than can serve static resources can be used instead.

**To setup the node server**
* Clone the files to your local machine using git
* Run `npm install` to install the dependencies
* Type `npm start` to run the server

## To Do

- [ ] Add instructional commenting to files
- [x] Description of app on homepage
- [x] Add start and end times to events and transform appropriately to create Dates
- [ ] Turn off ability to RSVP after the event is over (end time on date) automatically (???)
- [x] Create RSVP form
- [x] Create a server (Node, package.json)
  - [x] Remove .htaccess
  - [x] Create setup instructions
  - [x] Put files in /public folder
  - [x] Redirect 404's that are HTML requests to /404
  - [ ] Redirect other 404 requests to 404.html
