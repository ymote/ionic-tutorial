angular.module('directory.controllers', [])

.controller('EmployeeIndexCtrl',['$scope', 'EmployeeService', function ($scope, EmployeeService) {

  //define a employees variable to hold all employees data
  $scope.employees = [];
  
  $scope.searchKey = "";

  //watch the searchKey variable, call the findByName method in EmployeeService to filter employees
  $scope.$watch('searchKey', function(){
    EmployeeService.findByName($scope.searchKey).then(function (employees) {
      $scope.employees = employees;
    });
  });

  //clear the search, should show all employees
  $scope.clearSearch = function () {
    $scope.searchKey = "";
    findAllEmployees();
  };
  
  //get all employees from EmployeeService
  var findAllEmployees = function() {
    EmployeeService.findByName($scope.searchKey).then(function (employees) {
      $scope.employees = employees;
    });
  };

  //initially, show all employees on view 
  findAllEmployees();

}])
   
.controller('EmployeeDetailCtrl', ['$scope', 'employee', 'reports', function($scope, employee, reports) {
  $scope.employee = employee;  
  $scope.reports = reports;
}])    
 
.controller('EmployeeReportsCtrl', ['$scope', 'employee', 'reports', function ($scope, employee, reports) {
  $scope.employee = employee;
  $scope.reports = reports;
}])   
  
  
;