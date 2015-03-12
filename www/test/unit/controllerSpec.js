describe("Test employees list.", function() {

  beforeEach(function() {
    //Ensure angular modules available
    module('directory.services');
    module('directory.controllers');
  });
  
  var EmployeeIndexController;
  
  beforeEach(inject(function($rootScope, $controller, _EmployeeService_) {
    scope = $rootScope.$new();
    EmployeeIndexController = $controller('EmployeeIndexCtrl', {$scope: scope, EmployeeService: _EmployeeService_});
    scope.$digest();
  }));

  it('$scope.employees should have 12 employees coming from EmployeeService.findAll method', function(){
    expect(scope.employees).toBeDefined();
    expect(scope.employees.length).toBe(12, 'There should be 12 items in $scope.employees');
  });
  
});