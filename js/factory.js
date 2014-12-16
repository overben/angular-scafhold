'use strict'

var zappFactory = angular.module('zappFactory',[]);
zappFactory.factory('zappFactory', function($http){
	return {

		test: function(a){
			return a;
		}
	}
});