/***
 * trustAsHtml filter
 *
 * Escape HTML when using ng-bind-html
 * ng-bind-html="stringOfHTML | trustAsHtml"
 */

angular
	.module('myApp')
	.filter('trustAsHtml', [
		'$sce',
		function($sce) {
			return function(text) {
				return $sce.trustAsHtml(text);
			}
		}
	]);