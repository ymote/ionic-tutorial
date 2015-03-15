Another popular feature in information displaying app is the abilities to sort results in various ways. We are going to 
implement this feature in this exercise.

## Sort Movies

When facing a long list of movies, the sort function is very convenient. We will add four sort options -- sort by title, 
by use rating, by release date and by popularity and sort in both directions.

Let's first identify the attributes in movie we will use. The first three sort options are obvious, there are fields just 
store those information in movies. For popularity, we use the ```rating_count``` field in movie, as more people choose to rate 
the movies means more people are interested in it.

## Service

Let's change ***services.js*** to support sorting on these four fields. We add ```sortMovies``` method, which expecting ```sortKey`` 
and ```sortOrder``` variables. ```sortKey``` is the name of the field we are going to sort on, ```sortOrder``` is an integer, it controls 
the order of sorting based on the sign of number. Please notice we again sorting on the ```current``` movies, so it will play nicely 
with other features.

## Controller

In ```MovieHomeCtrl```, we add a method ```$scope.sortMovies``` to work with ```MovieService.sortMovies``` to provide sort function. 
More interstingly, we use ```ionicPopover``` directive to provide popup for user to select sort option. This directive expects 
a template ```templates/popover.html```. This is in the ```movie-index.html```, the bottom ```<script>``` tag. 

## View

Lastly in the ***movie-index.html***, we added ```<ion-nav-button>``` above the header bar. This button will show on the right of the 
header. Click the button will show the sort menu from the template in ```<script id="templates/popover.html" type="text/ng-template">```. 
For the template, each item has ng-click bind to the ```$scope.sortMovies``` in ```MovieHomeCtrl```, passing the corresponding sork key.

