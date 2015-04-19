'use strict';

var http = require('http');
var path = require('path');
var fs = require('fs');
var mime = require('mime');
var config = JSON.parse(fs.readFileSync('./config.json', {encoding: 'utf-8'}));

/**
 * Handle incoming HTTP Requests with a very basic web server
 * 
 * @param  {*} req		HTTP Request Object
 * @param  {*} res		HTTP Response Object
 * @return {*} void		Nothing is returned
 */
function handleHttpRequest(req, res) {
	var targetPath, readStream, extension;
	var pathIndex = path.normalize(config.webRoot + '\\' + config.directoryIndex);
	var path404 = path.normalize(config.webRoot + '\\' + config.fileNotFound);

	try {
		// Log as long as it isn't disabled via the config file
		// to disable loggin, add "disableLogging": true to the config.json file
		if (!config.disableLogging) { console.log('HTTP_REQUEST: ' + req.connection.remoteAddress + ' to URL ' + req.url); }

		//redirect access to dir to default file
		if (req.url.charAt(req.url.length - 1) === '/') {
			req.url += config.directoryIndex;
		}
		targetPath = path.normalize(config.webRoot + req.url);
		extension = path.extname(targetPath).substr(1);

		if (!extension || !!extension && extension.indexOf('htm') > -1 && targetPath !== pathIndex && targetPath.indexOf('ng-app') === -1) {
			// rewrite targetPath to pathIndex if it is an html request and it isn't a view page or the base index file
			targetPath = pathIndex;
		}

		readStream = fs.createReadStream(targetPath);
		readStream.on('open', sendExistingFile);
		readStream.on('error', sendFileNotFound);
	} catch (e) {
		console.log('ERROR: ' + e.message);
		res.statusCode = 500;
		res.end('500 Server error occurred');
	}
	function sendExistingFile() {
		if (targetPath === path404) {
			res.statusCode = 404;
		} else {
			res.statusCode = 200;
		}
		res.setHeader('Content-type', mime.lookup(targetPath));
		readStream.pipe(res);
	}
	function sendFileNotFound() {
		// TODO: This should redirect the user to the 404.html page
		console.log('FILENOTFOUND: ' + req.connection.remoteAddress + ' to targetPath: ' + targetPath);
		res.statusCode = 404;
		res.end('404 Not Found');
	}
}

http.createServer(handleHttpRequest).listen(config.port || 1337);
console.log('Starting server...listening on port: ' + config.port || 1337);
