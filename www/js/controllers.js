angular.module('directory.controllers', [])

.controller('EmployeeIndexCtrl',['$scope', 'EmployeeService', function ($scope, EmployeeService) {

  //define a employees variable to hold all employees data
  $scope.employees = [];
  
  $scope.searchKey = "";

  //watch the searchKey variable, call the findByName method in EmployeeService to filter employees
  $scope.$watch('searchKey', function(){
    //fill in code below
    //use the findByName method in EmployeeService to return qualified employees and assign to $scope.employees
    EmployeeService($scope.searchKey).then(function(employee){
    $scope.employees = employee;
    });
    
    
  });

  //clear the search, should show all employees
  $scope.clearSearch = function () {
    $scope.searchKey = "";
    //fill in the code below to show all employees
    findAllEmployees();
    
  };
  
  //get all employees from EmployeeService
  var findAllEmployees = function() {
    EmployeeService.findAll().then(function (employees) {
      $scope.employees = employees;
    });
  };

  //initially, show all employees on view 
  findAllEmployees();

}])
    
;