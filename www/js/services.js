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
  
  return {
    getAllMovies: getAllMovies
  };
    
}])

;