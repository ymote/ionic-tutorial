angular.module('movie.services', [])

.factory('MovieService', ['$q', '$http', function($q, $http) {
  //store and cache all moveis from json file to simulate database
  var movies = [];
  //store current selected movies
  var current = [];

  //get all movies from data/movies.json
  var getAllMovies = function(){
    var defer = $q.defer();
    //check if movies already exist
    if (movies.length === 0){
      //use $http.get movies data from data/movies.json and save it to movies variable
      //then resolve the data



    } else{
      //if movies already exist, just resolve it
      defer.resolve(movies);
    }
    return defer.promise;
  };
  
  //reset is called to have seleced movies stored as current
  //current is used in search, pagination and sort
  var reset = function(movies){
    current = movies;
  };
  
  //pagination implementation, check if there are more data in current   
  var hasMore = function(pageNum, limit){
    return pageNum * limit < current.length;
  };
      
  //use pageNum to locate the page section 
  //return the page section from current stored movies
  var loadPage = function(pageNum, limit){
    var start = pageNum * limit;
    if (start >= current.length) {
      return [];
    }
    var end = (pageNum+1) * limit;
    if (end > current.length){
      end = current.length;
    }
    return current.slice(start, end);
  };
    
  //get movies in page pageNum 
  var getMovies = function(pageNum, limit){
    var defer = $q.defer();
    //use getAllMovies method to locate all movies
    //set all movies to be current selected movies
    //use loadPage to resolve movies in desired pageNum




    return defer.promise;
  };
  
  //search movies based on searchKey
  var searchMovies = function(searchKey, pageNum, limit){
    var defer = $q.defer();
    //use getAllMovies method to locate all movies
    //apply array.filer method on movies to search on seleced fields
    getAllMovies().then(function(movies){
      var results = movies.filter(function(movie) {
        var searchString = movie.title+' '+movie.directors.join(' ')+' '+movie.actors.join(' ');
        return searchString.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
      });        
      reset(results);
      defer.resolve(loadPage(pageNum, limit));
    });    
    return defer.promise;
  };
    
  //sort movies based on sortKey and sortOrder  
  var sortMovies = function(sortKey, sortOrder, pageNum, limit){
    var defer = $q.defer();
    //we want to sort on currently selected movies
    var results = current.sort(function(movie1, movie2){
      //use sortOrder to construct compare function in array.sort method
      if (sortOrder > 0){
        return (movie1[sortKey] < movie2[sortKey]) ? 1 : -1;
      } else {
        return (movie1[sortKey] > movie2[sortKey]) ? 1 : -1;
      }
    });
    reset(results);
    defer.resolve(loadPage(pageNum, limit));
    return defer.promise;
  };
    
  //filter movies based on the low and high rating
  var filterByRating = function(low, high, pageNum, limit){
    //rating is between 0 and 10
    low = low || 0;
    high = high || 10;
    var defer = $q.defer();
    getAllMovies().then(function(movies){
      //use array.filters to select ones from all movies
      //filter condition is movie.rating > low && movie.rating < high
      //set filter results to be current selected movies
      //use loadPage to resolve movies in desired pageNum from results
      
      
      
      
    });       
    return defer.promise;
  };

  //expose functionalities to be used in controllers
  return {
    hasMore: hasMore,
    loadPage: loadPage,
    getMovies: getMovies,
    searchMovies: searchMovies,
    sortMovies: sortMovies,
    filterByRating: filterByRating
  }
    
}])

;