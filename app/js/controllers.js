'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);


phonecatControllers.controller('EventsCtrl',function($scope,$http,$location){
	var url= $location.path().replace("/","");
	$scope.partial = url+'.html';
	
	var loc="http://cms.kurukshetra.org.in/"+url+".json";
	console.log(loc);
if(url){
	$http.get(loc).
	success(function(data,status){
		$scope.eventslist = data;
	}).
	error(function(data,status){
		console.log(data);
	});}
	
});
