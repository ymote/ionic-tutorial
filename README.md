The last feature we will add to the movie index page is filtering movies by user rating. 

Rating is an important indicator for a movie. In this feature, we learn how to add third-party jquery plugin into an ionic app. 

### nouislider

We use the jquery <a href="http://refreshless.com/nouislider/" target="_blank">nouislider plugin</a> to filter movies by rating. 
The plugin is referenced in ***index.htmll***. 

### Service 

We add `filterByRating` method in ***services.js***. This method expects a low rating and a high rating. It searchs all movies 
and return those with rating between the rating range. Again it is a promise based method. So in controller, we will need to resolve 
the returned results.

### Controller

In **MovieHomeCtrl**, the `$scope.filterMovies` method filters movies and assign results to `$scope.movies`. The unique part is the 
first line in this method -- 

  ```var range = $slider.val();``` 

This directly calls the nouislider's api to get the two end vaules of the slider.

The `$slider` is a jquery element defined below the `filterMovies` method. The code to work with nouislider is very typical 
jquery functions. We can also put them in angular controller, and it will execute just as plain javascript code. 

This is a quick and dirty way to execute jquery functions. A better approach is to write a custom directive and encapsulate the 
jquery plugin in it. We can see Angular and Jquery work together well. This allow us to use various jquery plugins in Angular app.

### View

We add a bottom bar in ***movie-index.html*** for the slider. It includes a `<div id="slider">`, which is initialized by 
nouislider.



