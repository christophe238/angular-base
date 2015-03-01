define([
	'angular',
	'core/app/manifest'
],function(ng){

	var app = ng.module('CoreApp',[
		'AppLocalStorage',
		'CoreRouterApp',
		'LocaleApp'
	]);
	
	return app;
});