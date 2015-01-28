angular.module('directory.controllers', [])

.controller('EmployeeIndexCtrl', function ($scope, EmployeeService) {

  $scope.searchKey = "";
  $scope.employees = [];

  //clear search should empty searchKey and show all employees on view
  $scope.clearSearch = function () {


  };

  //use the findByName method in EmployeeService to complete search function
  //assagin the results to employees variable
  $scope.search = function () {



  };

  //get all employees from EmployeeService
  //assagin the results to employees variable
  var findAllEmployees = function() {



  };

  //initially, show all employees on view 
  findAllEmployees();

})
    
;