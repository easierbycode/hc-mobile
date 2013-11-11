var controllers = angular.module('hc.controllers', []);


controllers.controller('DashboardCtrl', function($scope, Alert) {
  var pusher  = new Pusher("f513119581ede36ac6c4")
  var debug   = pusher.subscribe("debug");

  debug.bind('message', function(message) {
    $scope.$apply(function(){ $scope.latestTemp = message.temp.toFixed(1) });
  });
});