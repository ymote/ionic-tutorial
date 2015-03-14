First of all, let's get all our movies shown when the app starts. Again we delegate all interactions with data source to 
***services.js***. Instead of a simple javascript array, we use a json file ***movies.json*** to store all 91 movies.

***services***

We use angular built-in ```$http``` module to read data from ***movies.json*** through the ```getAllMovies``` method. As 
alwarys, we use promise based methods to talk with data. Also we store the data to a local variable ```movies```. So we 
only need to read the json file once. 

***Router***

In ***app.js***, we use ui-router to add default router to ```MovieHomeCtrl```, with the view template ***templates/movie-index.html***.

***Controller***

The ```MovieHomeCtrl``` is pretty simple, it retrives the movie data from ```MoiveService``` and assigns it to ```$scope.movies``` variable.

***View***

Finally let's look at the template showing all movies. After walking through the Employee Directory app, this template should feels 
very fimilar. We are using ```<ion-list>``` to show movies. Each movie  ```<ion-item>``` has the movie poster, title, release date and 
user rating.

