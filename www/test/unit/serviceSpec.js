describe("Test ratings with 3 movies pool -- The Godfather, Finding Nemo and Batman Forever.", function() {

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
    $httpBackend.whenGET("data/movies.json").respond([
      { title:'The Godfather', rating:'9.2'}, {title: 'Finding Nemo', rating:'8.1'}, {title: 'Batman Forever', rating: '5.4'}
    ]); 
    MovieService.getAllMovies().then(function () {
    });
    $httpBackend.flush();     
  }));
  
  it('Should have employee service be defined.', function () {
    expect(MovieService).toBeDefined();
  });

  it('Should correctly filter high rated movies (>9.0) and show only one movie', function(){
    var data = [{title:''}];
    // set up a deferred
    var deferred = $q.defer();
    // get promise reference
    var promise = deferred.promise;
    // set up promise resolve callback
    promise.then(function (response) {
      data = response;
    });
    MovieService.filterByRating(9.0,10.0,0,20).then(function(movies){
        deferred.resolve(movies);
    })
    $rootScope.$digest(); 
    expect(data.length).toBe(1);
    expect(data[0].title).toBe("The Godfather", "The movie should be The Godfather");
  });

  it('Should correctly filter low rated movies (<5.5) and show only one movies', function(){
    var data = [{title: ''}];
    // set up a deferred
    var deferred = $q.defer();
    // get promise reference
    var promise = deferred.promise;
    // set up promise resolve callback
    promise.then(function (response) {
      data = response;
    });
    MovieService.filterByRating(0.0,5.5,0,0,20).then(function(movies){
        deferred.resolve(movies);
    })
    $rootScope.$digest(); 
    expect(data.length).toBe(1);
    expect(data[0].title).toBe("Batman Forever", "The movie shoud be Batman Forever");
  });

  it('Should correctly filter medium rated movies (8.0 - 8.2) and show only one movies in the 3 movies\' pool', function(){
    var data = [{title: ''}];
    // set up a deferred
    var deferred = $q.defer();
    // get promise reference
    var promise = deferred.promise;
    // set up promise resolve callback
    promise.then(function (response) {
      data = response;
    });
    MovieService.filterByRating(8.0,8.2,0,0,20).then(function(movies){
        deferred.resolve(movies);
    })
    $rootScope.$digest(); 
    expect(data.length).toBe(1);
    expect(data[0].title).toBe("Finding Nemo", "The movie shoud be Finding Nemo");
  });
  
});