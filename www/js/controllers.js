angular.module('movie.controllers', [])

.controller('MovieHomeCtrl', ['$scope', 'MovieService', '$ionicPopover', function($scope, MovieService, $ionicPopover){
  $scope.movies = [];
  $scope.searchKey = '';
  $scope.sortKey = '';
  var sortOrder = 1;

  var limit = 20, currentPage = 0;
  
  MovieService.getMovies(currentPage, limit).then(function(movies){
    $scope.movies = movies;
  });   

  $scope.loadMoreData = function(){
    currentPage += 1;
    $scope.movies = $scope.movies.concat(MovieService.loadPage(currentPage, limit));
    $scope.$apply(function(){
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };
  
  $scope.hasMoreData = function(){
    return MovieService.hasMore(currentPage+1, limit);
  };
  
  $scope.$watch('searchKey', function(){
    currentPage = 0;
    MovieService.searchMovies($scope.searchKey, currentPage, limit).then(function(movies){
      $scope.movies = movies;
    }); 
  });
  
  $scope.sortMovies = function(sortKey){
    if ($scope.sortKey == sortKey){
      sortOrder = (-1) * sortOrder;
    }
    currentPage = 0;
    $scope.sortKey = sortKey;
    MovieService.sortMovies($scope.sortKey, sortOrder, currentPage, limit).then(function(movies){
      $scope.movies = movies;
    }); 
  };

  $scope.filterMovies = function(){
    var range = $slider.val();
    currentPage = 0;
    MovieService.filterByRating(range[0], range[1], currentPage, limit).then(function(movies){
      $scope.movies = movies;
    });
  }

  //example configuration to use jquery noUiSlider
  var $slider = $("#slider");
  //initialize the slider configuration
  $slider.noUiSlider({
    start: [ 0, 10 ], //to start, filter movies rating from 0 to 10, that is all movies
    connect: true,
    step: 0.5, //increment step interval is 0.5
    range: { //set the filter rating between 0 and 10
      'min': 0,
      'max': 10
    }
  });
  //use slider tooltip to show the actual values of filter
  $slider.Link('lower').to('-inline-<div class="tooltip"></div>', function ( value ) {
    $(this).html(
      '<span>' + value.substr(0, value.length - 1) + '</span>'
    );
  });
  $slider.Link('upper').to('-inline-<div class="tooltip"></div>', function ( value ) {
    $(this).html(
      '<span>' + value.substr(0, value.length - 1) + '</span>'
    );
  });
  //wire the change event on slider to the $scope.filterMovies method
  //so the filter method is triggered when values change in slider
  $slider.on({change: $scope.filterMovies});


  //shows the usage of $ionicPopover, see ionic documentation for detail explanation.
  //the name for the popover view is 'templates/popover', it is the templateUrl for the $ionicPopover directive.
  //we use ng-template to provide the view, it is in the movie-index.html
  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    //attach the current scope, so ng-click in the popover template is wired to the method defined above
    scope: $scope, 
  }).then(function(popover) {
    $scope.popover = popover;
  });  
}])


.controller('MovieDetailCtrl', ['$scope', '$location', 'movie', function($scope, $location, movie){
  //if the movie does not exists, go back the the index page
  if(!movie){
    $location.path('/movies');
  }
  
  $scope.movie = movie;
  
}])


;