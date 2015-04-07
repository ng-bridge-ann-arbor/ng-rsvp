/***
 * trustAsHtml filter
 *
 * @getter: get app module
 * @filter: Inject $sce (Strict Contextual Escaping) and use trustAsHtml
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