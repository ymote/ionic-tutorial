// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('directory', ['ionic', 'directory.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('EmployeeIndexCtrl',['$scope', 'EmployeeService', function ($scope, EmployeeService) {

  //use EmployeeService.findAll method to return employees
  //use .then(successCallback, errorCallback, notifyCallback) to get employees
  $scope.employees = [
    {"id": 1, "firstName": "James", "lastName": "King", "title": "President and CEO", "pic": "James_King.jpg"},
    {"id": 2, "firstName": "Julie", "lastName": "Taylor", "title": "VP of Marketing", "pic": "Julie_Taylor.jpg"},
    {"id": 3, "firstName": "Eugene", "lastName": "Lee", "title": "CFO", "pic": "Eugene_Lee.jpg"}
  ];

}])

;
