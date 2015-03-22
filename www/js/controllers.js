angular.module('movie.controllers', [])

.controller('MovieHomeCtrl', ['$scope', 'MovieService', '$ionicPopover', function($scope, MovieService, $ionicPopover){
  $scope.movies = [];
  $scope.searchKey = '';
  $scope.sortKey = '';
  $scope.deduction = 10;
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

  $scope.$watch('deduction', function(){
    var high = 10;
    var low = high - parseInt($scope.deduction);
    currentPage = 0;
    MovieService.filterByRating(low, high, currentPage, limit).then(function(movies){
      $scope.movies = movies;
    });
  });

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