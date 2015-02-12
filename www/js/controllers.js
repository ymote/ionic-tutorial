angular.module('movie.controllers', [])

.controller('MovieHomeCtrl', ['$scope', 'MovieService', function($scope, MovieService){

  var limit = 5, currentPage = 0;
  
  MovieService.getMovies(currentPage, limit).then(function(movies){
    $scope.movies = movies;
  });   

  MovieService.searchMovies('star wars', currentPage, limit).then(function(movies){
    $scope.searchMovies = movies;
  }); 

  MovieService.sortMovies('title', 1, currentPage, limit).then(function(movies){
    $scope.sortMovies = movies;
  }); 
  
  MovieService.filterByRating(7, 8, currentPage, limit).then(function(movies){
    $scope.filterMovies = movies;
  });
    
}])

;