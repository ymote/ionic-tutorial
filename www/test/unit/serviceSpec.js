describe("Movie App Service Unit Tests", function() {

    var $q,
        $rootScope;
        
  beforeEach(function() {
      //Ensure angular modules available
    module('movie.services');
  });
  
  var MovieService;
  
  beforeEach(inject(function (_$q_, _$rootScope_,_MovieService_) {
    $q = _$q_;
    $rootScope = _$rootScope_;      
    MovieService = _MovieService_;
  }));
  
  it('should have employee service be defined', function () {
    expect(MovieService).toBeDefined();
  });

  it('should return all movies in getAllMovies method', function(){
      var data;
      // set up a deferred
      var deferred = $q.defer();
      // get promise reference
      var promise = deferred.promise;
      // set up promise resolve callback
      promise.then(function (response) {
        data = response;
      });
      MovieService.getAllMovies().then(function(movies){
          deferred.resolve(movies);
      })
      $rootScope.$digest();
      expect(data.length).toBe(91);
  });
  
  it('should get first 2 movies if getMovies method is called with parameters 0 and 2', function(){
      var data = [{title:''},{title:''}];
      // set up a deferred
      var deferred = $q.defer();
      // get promise reference
      var promise = deferred.promise;
      // set up promise resolve callback
      promise.then(function (response) {
        data = response;
      });
      MovieService.getMovies(0,2).then(function(movies){
          deferred.resolve(movies);
      })
      $rootScope.$digest(); 
      expect(data.length).toBe(2);
      expect(data[0].title).toBe("Star Wars");
      expect(data[1].title).toBe("Finding Nemo");
  });

  it('should correctly filter high rated movies (>9.0) and show only one movie', function(){
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
      expect(data[0].title).toBe("The Godfather");
  });

  it('should correctly filter low rated movies (<6.0) and show only two movies', function(){
      var data = [{title: ''}, {title: ''}];
      // set up a deferred
      var deferred = $q.defer();
      // get promise reference
      var promise = deferred.promise;
      // set up promise resolve callback
      promise.then(function (response) {
        data = response;
      });
      MovieService.filterByRating(0.0,6.0,0,0,20).then(function(movies){
          deferred.resolve(movies);
      })
      $rootScope.$digest(); 
      expect(data.length).toBe(2);
      expect(data[0].title).toBe("Amelia");
      expect(data[1].title).toBe("Batman Forever");
  });
  
});