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

  it('Should be able to search employees.', function(){
    scope.searchKey = 'steve';
    scope.$digest();
    expect(scope.employees.length).toBe(1, 'When searchKey is steve, there should be 1 employee.');
    expect(scope.employees[0].firstName).toBe('Steven', 'The firstName of employee should be Steven.');
  });
  
  it('Should show all 12 employees when clearSearch method is fired.', function(){
    scope.clearSearch();
    scope.$digest();
    expect(scope.employees).toBeDefined();
    expect(scope.employees.length).toBe(12, 'There should be 12 employees when searchKey is empty.');  
  });
  
});