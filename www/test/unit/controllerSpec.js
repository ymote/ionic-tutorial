describe("Test infinite scrolling.", function() {

  beforeEach(function() {
    //Ensure angular modules available
    module('movie.services');
    module('movie.controllers');
  });
  
  var MovieHomeCtrl;
  
  beforeEach(inject(function($rootScope, $controller, _MovieService_, _$httpBackend_) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    MovieService = _MovieService_;
    EmployeeIndexController = $controller('MovieHomeCtrl', {$scope: scope, MovieService: _MovieService_});
    var dummy = {'title': 'dummy'};
    var results = [];
    for (var i=0;i<100;i++){
      results.push(dummy);
    }
    $httpBackend.whenGET("data/movies.json").respond(results);
    MovieService.getAllMovies().then(function(){
      
    });
    $httpBackend.flush();
    scope.$digest();
  }));
  
  it('Should load 20 more movies when loadMoreData is called.', function(){
    scope.loadMoreData();
    scope.$digest();
    expect(scope.movies).toBeDefined();
    expect(scope.movies.length).toBe(40, 'There should be 40 movies when loadMoreData is called once.');
    
    scope.loadMoreData();
    scope.$digest();
    expect(scope.movies.length).toBe(60, 'There should be 40 movies when loadMoreData is called twice.');    
  });
  
  it('hasMoreData should return true intially, meaning there are more movies.', function(){
    expect(scope.hasMoreData()).toBeTruthy();
  });
  
  it('hasMoreData should return false when currentPage is a large number (loadMoreData is called 6 times).', function(){
    scope.loadMoreData();
    scope.loadMoreData();
    scope.loadMoreData();
    scope.loadMoreData();
    scope.loadMoreData();
    scope.loadMoreData();
    expect(scope.hasMoreData()).toBeFalsy();
  });  
  
});