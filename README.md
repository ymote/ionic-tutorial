In this exercise, we finish our implementation of inifinite scrolling. We now already have service support data pagination, let's 
see how to use it in controller.

*** Controlelr ***

We add two $scope mehods in controller. These methods are triggered by ```<ion-infinite-scroll>``` directive. The ```loadMoreData``` 
method calls ```MovieService.getMovies``` to load move data into ```$scope.movies```. Please note we need to call 
```$scope.$broadcast('scroll.infiniteScrollComplete');``` in this method to let ionic know the data have been loaded. 
```$scope.$broadcast``` dispatches an event name downwards to all child scopes. In this case, we are dispatching ```scroll.infiniteScrollComplete``` 
message to the ```ionic-infinite-scroll`` directive. This is an example showing inter-commnucation between different components in 
Angular. This comes in handy developing event-driven application.

Another method ```$scope.hasMoreData``` is needed to notify ```ion-infinite-scroll``` if there are more data. It calls ```hasMore``` 
method in ```MovieService``` to do that.

*** View ***

Now we have everthing ready, adding the directive to view is actually the easiest part. The ```<ion-infinite-scroll>``` expects a 
```ng-if``` binding to a funcion to check if there is more data, and ```on-infinite``` binding to function to load more data. Just 
wire them with the right functions, the infinite scrolling will work.
