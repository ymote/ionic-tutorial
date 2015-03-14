angular.module('movie.controllers', [])

.controller('MovieHomeCtrl', ['$scope', 'MovieService', function($scope, MovieService){
  $scope.movies = [];

  //complete the below method
  //use MovieService.getAllMovies to get all movies and saved to $scope.movies
  //MovieService.getAllMovies return a promise, need to resolve it
  var loadAllMovies = function(){
    
    
    
  };

  //load all movies on start  
  loadAllMovies();

}])

;