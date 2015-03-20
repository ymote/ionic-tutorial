Let's move on to our next feature -- search movies. This is a search-as-you-type feature, very similar to the one we implemented in 
Employee Directory App. Let's start coding it.

### Service

We added a `searchMovies` method, which is fed with a *searchKey* variable and do a search on movies' titles, directors and actors.

Please note we added another variabe *current* to store data. This is because now we have two features, it is likely search will return 
more than 20 results, then scrolling should work on the search results. It would be very confusing if a user scorll the page, his/her 
seach results are gone.

To make sure these two features play together, we use a variabe *current* to store the search results. 

A new method *reset* is called in the *searchMovies* function. It store the search results in *current*.  
And pagination is now acting on *current* movies rather than all *movies* data. 

We will keep this convention when adding other features -- each feature changes the value of *current*, and pagination is on it.

### Controller

In **MovieHomeCtrl**, we use angular's ```$watch``` on *$scope.searkKey*. Every time the value changes, it should trigger 
*searchMovies* method in **MovieService**. The results are instantly displayed on view.

### View

In ***movie-index.html***, before *<ion-content>*, we add a header which contains a input box. The input has a *ng-model=searhKey*, 
so the user types in the input, *$scope.moveis* will change accordingly to update the view.
