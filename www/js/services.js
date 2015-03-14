angular.module('movie.services', [])

.factory('MovieService', ['$q', '$http', function($q, $http) {
  var movies = [];

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
  
  //load chunk of data from movies variable
  //limit is the item number in each page
  //pageNum is the number of page to load
  var loadPage = function(pageNum, limit){
    //start is the item index in movies to load
    var start = pageNum * limit;
    
    //if start index is already larger than total number of items
    //we know there is no more item 
    if (start >= movies.length) {
      return [];
    }
    
    //calculate the end index, which is the start of the next page or the end of movies variable
    var end = (pageNum+1) * limit;
    if (end > movies.length){
      end = movies.length;
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
  
  return {
    loadPage: loadPage,
    hasMore: hasMore,
    getMovies: getMovies,    
  };
    
}])

;