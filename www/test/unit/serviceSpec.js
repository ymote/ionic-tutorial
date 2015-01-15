describe("Directory Service Unit Tests", function() {

    var $q,
        $rootScope;
        
  beforeEach(function() {
      //Ensure angular modules available
    module('directory.services');
  });
  
  var EmployeeService;
  
  beforeEach(inject(function (_$q_, _$rootScope_,_EmployeeService_) {
    $q = _$q_;
    $rootScope = _$rootScope_;      
    EmployeeService = _EmployeeService_;
  }));
  
  it('should have employee service be defined', function () {
    expect(EmployeeService).toBeDefined();
  });

  it('should return all employees in findAll method', function(){
      var data;
      // set up a deferred
      var deferred = $q.defer();
      // get promise reference
      var promise = deferred.promise;
      // set up promise resolve callback
      promise.then(function (response) {
        data = response;
      });
      EmployeeService.findAll().then(function(employees){
          deferred.resolve(employees);
      })
      $rootScope.$digest();
      expect(data.length).toBe(12);
  });
  
  it('should find employee James King if findById method is called with id 1', function(){
      var data = {firatName:''};
      // set up a deferred
      var deferred = $q.defer();
      // get promise reference
      var promise = deferred.promise;
      // set up promise resolve callback
      promise.then(function (response) {
        data = response;
      });
      EmployeeService.findById(1).then(function(employee){
          deferred.resolve(employee);
      })
      $rootScope.$digest(); 
      expect(data.firstName).toBe('James');
  });

  it('should find employee Steven Wells in return array if findByName method is called with steve', function(){
      var data = [];
      // set up a deferred
      var deferred = $q.defer();
      // get promise reference
      var promise = deferred.promise;
      // set up promise resolve callback
      promise.then(function (response) {
        data = response;
      });
      EmployeeService.findByName('steve').then(function(employee){
          deferred.resolve(employee);
      })
      $rootScope.$digest(); 
      expect(data.length).toBe(1);
  });

  it('should find 4 employees if findByManager method is called with managerId 1', function(){
      var data = [];
      // set up a deferred
      var deferred = $q.defer();
      // get promise reference
      var promise = deferred.promise;
      // set up promise resolve callback
      promise.then(function (response) {
        data = response;
      });
      EmployeeService.findByManager(1).then(function(employee){
          deferred.resolve(employee);
      })
      $rootScope.$digest(); 
      expect(data.length).toBe(4);
  });  
});
