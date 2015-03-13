Now we have a list widget show all employees. Let's build a search bar on top to search through the list.

It might not be too helpful as we only have 12 employees. But as our list grows, the search function will become more useful.

**Service**

Let's put the code talking to data in ***services.js***. We define a ```findByName``` function, which is given a search string, and 
search through the ```employees``` array on the full name of employee (```firstName```+```lastName```). This is also a promise based 
method, as we are simulating a api call to database, and the promsie is resolved when the results return.


**Controller**

In ***controllers.js***, we added a ```$scope.searchKey``` variable to store the search key. We apply angular's ```$watch``` listener on it, 
so the search method will be triggered when there is a change in this variable. This provides search-as-you-type experience.

There is also a ```clearSearch``` method, which clear the ```searchKey``` variable and return all employees.

**View**

Most ionic work happens on the view. In ***employee-index.html***, we added a ```<ion-header-bar>``` directive, which adds a fixed header bar above 
our employees list. 

It is heavily styled to mimic input box on iphone. Besides all the CSS styles, it has a ```input``` element with ng-model ```searchKey``` and a button 
to trigger the ```clearSearch``` method on click event.

In summary, all the javascript code should feel very similar to an angular web app. Ionic mainly provide pre-built directives to properly style our app 
for mobile devices. 



