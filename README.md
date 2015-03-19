First of all, let's get all our movies shown when the app starts. Again we delegate all interactions with data source to 
***services.js***. Instead of a simple javascript array, we use a json file ***movies.json*** to store all 91 movies.

### service

We use angular built-in <a href="https://docs.angularjs.org/api/ng/service/$http" target="_blank">$http</a> module to read data from ***movies.json*** 
through the ```MovieService.getAllMovies``` method. As alwarys, we use promises to interact with data. 

The data is stored to a local variable ```movies```. So we only need to read the json file once. 

### Router to home page

In ***app.js***, we use ui-router to add default router to ```MovieHomeCtrl```. The view for this router is ***templates/movie-index.html***.

### Controller

The ```MovieHomeCtrl``` is pretty simple, it retrives the movie data from ```MoiveService``` and assigns it to ```$scope.movies``` variable.

### View

Finally let's look at the template showing all movies. After walking through the Employee Directory app, this template should feels 
very fimilar. We are using ```<ion-list>``` to show movies. Each ```<ion-item>``` represents a movie. It shows the movie's poster, title, release date 
and user rating.

