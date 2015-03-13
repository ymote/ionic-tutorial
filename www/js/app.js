// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('directory', ['ionic','directory.services','directory.controllers'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  
  //please see angular ui-router's documentation on usage
  $stateProvider
  
  //when url is /employees, the EmployeeIndexCtrl will run, and the view will be templates/employee-index.html
  .state('employee-index', {
    url: '/employees',
    templateUrl: 'templates/employee-index.html',
    controller: 'EmployeeIndexCtrl'
  })
  
  //state for employee detail
  //when url is /employees/:employeeId, the EmployeeDetailCtrl will run, and the view will be templates/employee-detail.html
  .state('employee', {
    url: '/employees/:employeeId',
    templateUrl: 'templates/employee-detail.html',
    controller: 'EmployeeDetailCtrl',
    resolve: {
      employee: ['EmployeeService', '$stateParams', function(EmployeeService, $stateParams){
        return EmployeeService.findById($stateParams.employeeId);
      }]
    }    
  })  
  
  .state('reports', {
    url: '/employees/:employeeId/reports',
    templateUrl: 'templates/employee-reports.html',
    controller: 'EmployeeReportsCtrl',
    resolve: {
      
      //change the code
      //resolve the employee object 
      employee: ['EmployeeService', '$stateParams', function(EmployeeService, $stateParams){
        return null; //change
      }],
      
      //change the code
      //resolve the employee's reports
      reports: ['EmployeeService', '$stateParams', function(EmployeeService, $stateParams){
        return null; //change
      }]
      
    }
  })
  
  ;

  // if none of the above states are matched, use this as the fallback
  // also the home page / goes to /employees, so it is the default page
  $urlRouterProvider.otherwise('/employees');   
}])

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

;
