angular.module('ui_zapp', [])

.controller('testDirectiveCtrl', ['$scope', function($scope) {
$scope.b = 'b'

}])
.directive('testDirective', function() {
    return {
    	restrict: 'E',
      	templateUrl: 'directives/testDirective.html?'+Math.random(),
      	controller: 'testDirectiveCtrl'
    };
});