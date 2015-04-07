/***
 * trustAsHtml filter
 *
 * @getter: call module we defined in startup.js 'myApp'
 * Inject $sce (Strict Contextual Escaping) and use trustAsHtml
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