'use strict';
var zApp = angular.module('zApp', ['ngRoute','appControllers','ui_zapp']);

zApp.config(function ($routeProvider,$httpProvider,$locationProvider){
	$routeProvider.
	when('/accueil', {
		templateUrl: 'partials/accueil.html',
		controller: 'accueilController'
	}).
	when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'loginController'
	}).
	otherwise({
		redirectTo: '/accueil'
	});
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
	$httpProvider.defaults.headers.post['Content-Type'] = '' + 'application/x-www-form-urlencoded; charset=UTF-8';
});

