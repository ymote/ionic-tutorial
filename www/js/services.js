angular.module('movie.services', [])

.factory('MovieService', ['$q', '$http', function($q, $http) {
  var movies = [];

  var getAllMovies = function(){
    var defer = $q.defer();
    //if the local movies varialbe is empty, get movies from the json file
    if (movies.length === 0){
      $http.get('data/movies.json').success(function(data){
        //store movies and resolve
        movies = data;
        defer.resolve(movies);
      });
    } else{ //the movies has already been read, resolve the local movies varialbe
      defer.resolve(movies);
    }
    return defer.promise;
  };
  
  return {
    getAllMovies: getAllMovies
  };
    
}])

;