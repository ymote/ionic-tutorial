describe("Directory Controller Unit Tests", function() {

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

  it('should show all 12 employees by default', function(){
    expect(scope.employees).toBeDefined();
    expect(scope.employees.length).toBe(12);
  });
  
  it('should be able to search employee by searchKey', function(){
    scope.searchKey = 'steve';
    scope.search();
    scope.$digest();
    expect(scope.employees.length).toBe(1);
    expect(scope.employees[0].firstName).toBe('Steven');
  });
  
  it('should show all 12 employees after clearSearch method is called', function(){
    scope.clearSearch();
    scope.$digest();
    expect(scope.employees).toBeDefined();
    expect(scope.employees.length).toBe(12);  
  });

});