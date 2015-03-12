angular.module('directory.controllers', [])

.controller('EmployeeIndexCtrl',['$scope', 'EmployeeService', function ($scope, EmployeeService) {

  //define a employees variable to hold all employees data
  $scope.employees = [];

  //get all employees from EmployeeService
  //assagin the results to employees variable
  var findAllEmployees = function() {



  };

  //initially, show all employees on view 
  findAllEmployees();

}])
    
;