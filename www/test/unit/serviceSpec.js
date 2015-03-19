describe("Test service pagination.", function() {

  var $q, $rootScope;
        
  beforeEach(function() {
    //Ensure angular modules available
    module('movie.services');
  });
  
  var MovieService;
  
  beforeEach(inject(function (_$q_, _$rootScope_,_MovieService_,_$httpBackend_) {
    $q = _$q_;
    $rootScope = _$rootScope_;      
    MovieService = _MovieService_;
    $httpBackend = _$httpBackend_;
  }));
  
  it('Should have employee service be defined.', function () {
    expect(MovieService).toBeDefined();
  });

  it('Should get first 2 movies if getMovies method is called with parameters 0 and 2', function(){
    $httpBackend.whenGET("data/movies.json").respond([
      { title:'Star Wars'}, {title: 'Finding Nemo'}, {title: 'Another Movie'}
    ]);    
    var data = [{title:''},{title:''}];
    // set up a deferred
    var deferred = $q.defer();
    // get promise reference
    var promise = deferred.promise;
    // set up promise resolve callback
    promise.then(function (response) {
      data = response;
    });
  
    MovieService.getAllMovies().then(function () {
      MovieService.getMovies(0,2).then(function(movies){
        deferred.resolve(movies);
      })
    });
    $httpBackend.flush();  
    
    $rootScope.$digest(); 
    expect(data.length).toBe(2, 'There should be 2 movies.');
    expect(data[0].title).toBe("Star Wars", 'The first movie should be \'Star Wars\'');
    expect(data[1].title).toBe("Finding Nemo", 'The second movie should be \'Finding Nemo\'');
    expect(MovieService.hasMore(0,1)).toBe(true, 'hasMore should return true if numPage*limit < movies.length');
  });
  
});