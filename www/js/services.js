angular.module('movie.services', [])

.factory('MovieService', ['$q', '$http', function($q, $http) {
  var movies = [];
  //store current selected movies
  var current = [];
  
  var getAllMovies = function(){
    var defer = $q.defer();
    if (movies.length === 0){
      $http.get('data/movies.json').success(function(data){
        movies = data;
        defer.resolve(movies);
      });
    } else{
      defer.resolve(movies);
    }
    return defer.promise;
  };

  //reset is called to have seleced movies stored as current
  //current is used in search, pagination and sort
  var reset = function(movies){
    current = movies;
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
  
  //given a pageNum and limit, check if there are move data in movies variable  
  var hasMore = function(pageNum, limit){
    return pageNum * limit < current.length;
  };
  
  var getMovies = function(pageNum, limit){
    var defer = $q.defer();
    getAllMovies().then(function(movies){
      defer.resolve(loadPage(pageNum, limit));
    });
    return defer.promise;
  };  
  
  //search movies based on searchKey
  var searchMovies = function(searchKey, pageNum, limit){
    var defer = $q.defer();
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
  
  return {
    loadPage: loadPage,
    hasMore: hasMore,
    getMovies: getMovies, 
    searchMovies: searchMovies,
    sortMovies: sortMovies
  };
    
}])

;