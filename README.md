Now we have a list widget showing all employees. Let's build a search bar on top to search through the list.

It might not be too helpful as we only have 12 employees. But as our list grows, the search function will become important.

## Service

The code talking to data is in ***services.js***. We define a ```findByName``` function, which is given a search string, and 
search through the ```employees``` array on the full name of a employee (```firstName```+```lastName```). It is also a promise based 
method, as we are simulating an api call to database, and the promsie is resolved when the results return.


## Controller

In ***controllers.js***, we add a ```$scope.searchKey``` variable to store the search key. We apply angular's ```$watch``` listener to it, 
so the search method will be triggered when there is a change in this variable. This provides ***search-as-you-type*** experience.

There is also a ```clearSearch``` method, which clear the ```searchKey``` variable and return all employees.

## View

Most ionic work happens on the view. In ***employee-index.html***, we add a ```<ion-header-bar>``` directive, which is a fixed header bar above 
our employees list. 

The header bar is heavily styled to mimic a input box on iphone. It has a ```input``` element with ng-model ```searchKey```, and a button 
with ng-click ```clearSearch```.

All the javascript code should feel very similar to what in an angular web app. Right now, we are using ionic to provide native style components. 



