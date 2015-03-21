Our index page is packed with features we commonly find in a movie app. In this exercise, we are going to implement the detail 
page for a movie, so user can drill down the see more details about a movie when he/she click it on the index page. It is quite 
similar to what we were doing when adding the detail page for the Employee Directory App.

### Service

Again we start with change in ***services.js***. This time we add a `findMovieByTitle` method, which expects a movie's title. 
The method should search all movies and return the first one with the title or return null if the title is not found.

### Router

We need to add a router in ***app.js*** for our new page. We add a new state `movie-detail` to ui-router. It use a url 
segment `:title` to identify which movie should be present on the page. 

A new controller **MovieDetailCtrl** is used to handler the logic, and a new view page **movie-detail.html** is used to display the movie. 

Also we use the resolve trick from Employee Directory app to get data from service. So the movie object can be injected into 
controller as a parameter.

### Controller

The **MovieDetailCtrl** is very simple, it creates a `$scope.movie` variable to bind the movie to the view.

### View

The **movie-detail.html** is also quite straightforwrd, it shows various attributes of the binded `$scope.movie` variable.

Lastly, we add `href` attribute to each `<ion-item>` in **movie-index.html**. So clicking a item will redirect to its detail page.



