angular.module('movie.controllers', [])

.controller('MovieHomeCtrl', ['$scope', 'MovieService', function($scope, MovieService){
  $scope.movies = [];

  var limit = 20, currentPage = 0;
  
  //initially we just load 20 movies
  MovieService.getMovies(currentPage, limit).then(function(movies){
    $scope.movies = movies;
  }); 

}])

;