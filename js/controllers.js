var appControllers = angular.module('appControllers', ['zappFactory','ui_zapp']);

appControllers.controller('accueilController', function($scope,$location) {
	$scope.hello = 'a';
});

appControllers.controller('loginController', function($scope,$location) {

});
