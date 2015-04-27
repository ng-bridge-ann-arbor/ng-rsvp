# ng-RSVP

An AngularJS RSVP web application.

## Setup and Requirements

* The app has a built-in node server to serve the files for the app
 * Node is not required, any server than can serve static resources can be used instead.

**To setup the node server**
* Clone the files to your local machine using git
* Run `npm install` to install the dependencies
* Type `npm start` to run the server

## To Do

- [ ] Add instructional commenting to files
- [ ] Use controller activate format(?)
- [x] Description of app on homepage
- [ ] Add start and end times to events and transform appropriately to create Dates
- [ ] Turn off ability to RSVP after the event is over (end time on date)
- [x] Create RSVP form
  - [x] Validation & ngMessages
  - [x] Modal directive: Form in directive template; use `mailto:` location link to create and format an email to admin 
  with form contents
- [x] Create a server (Node, package.json)
  - [x] Remove .htaccess
  - [x] Create setup instructions
  - [x] Put files in /public folder
  - [x] Redirect 404's that are HTML requests to /404
  - [ ] Redirect other 404 requests to 404.html
