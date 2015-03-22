The last feature we will add to the movie index page is filtering movies by user rating. 

Rating is an important indicator for a movie. In this feature, we use ionic range to add rating filter. 

### ionic range

Check ionic documentation for more details about <a href="http://ionicframework.com/docs/components/#range" target="_blank">range</a>. 
Here we use it to pick out a number from 0 to 10 in order to filter rating. 

We assume user always want to see the higher rated movies. So for the selected number from ionic range, we filter out movies with rating 
lower than that number.

### Service 

We add `filterByRating` method in ***services.js***. This method expects a low rating and a high rating. It searchs all movies 
and return those with rating between the rating range. Again it is a promise based method. So in controller, we will need to resolve 
the returned results.

### Controller

In **MovieHomeCtrl**, we add `$scope.$watch` on variable `$scope.deduction`. This variable is binded to ionic range, It helps us 
to calculate the lower end of the filter (10-deduction). 

So as soon as the range value changes, the new filter range is calcuated (10-deduction to 10). It is passed into `MovieService.filterByRating` 
to get us new list of movies.

### View

We add a bottom bar in ***movie-index.html*** for the slider. It includes the ionic range.



