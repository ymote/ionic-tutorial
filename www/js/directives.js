angular.module('movie.directives', [])

.directive('score',function(){
  return {
    restrict: 'AE',
    
    scope: {
      rating: '@'
    },
    
    link: function(scope, elem, attrs){
      scope.rating = parseFloat(scope.rating);
      scope.imageSrc = 'spill.png';
      if (scope.rating > 8){
        scope.imageSrc = 'red.png';
      }
      else if (scope.rating > 6){
        scope.imageSrc = 'popcorn.png';
      }
      else if (scope.imageSrc > 4){
        scope.imageSrc = 'green.png';
      }
    },
    
    template: '<span><img ng-src="{{imageSrc}}"><strong>{{rating}}</strong></span>'
    
  }
})

;