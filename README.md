Another popular feature in information displaying app is the abilities to sort results in various ways. We are going to 
implement this feature in this exercise.

### Sort Movies

When facing a long list of movies, the sort function is very convenient. We will add four sort options -- sort by title, 
by user rating, by release date and by popularity. Sort is allowed in both directions.

Let's first identify the attributes in movie we will use. The first three sort options are obvious, there are fields just 
store those information in movies. 

For popularity, we use the `rating_count` field in movie, as more people choose to rate the movies means more people are interested in it.

### Service

Let's change ***services.js*** to support sorting on these four fields. We add `sortMovies` method, which expecting `sortKey` 
and `sortOrder` variables. `sortKey` is the field to sort, `sortOrder` is an integer, it controls 
the order of sorting based on the sign. 

Please notice we again sorting on the `current` movies, so it will play nicely with other features.

### Controller

In **MovieHomeCtrl**, we add `$scope.sortMovies` to provide sort function. 

More interstingly, we use **ionicPopover** directive for popup menu options. This directive need us to write its template. This is the 
**templates/popover.html**. It is in the ***movie-index.html***, the bottom ```<script>``` tag. 

### View

Lastly in the ***movie-index.html***, we add `<ion-nav-button>` above the header bar. This button will show on the right of the 
header. 

Click the button will show the sort menu from the template. In the menu, each item has ng-click bind to `$scope.sortMovies` in 
**MovieHomeCtrl**, passing the corresponding sort key.

