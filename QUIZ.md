**1.** Finish the ```findByName``` method in ***services.js** so we can do case-insensitive search based on employees' full name. 
Notice the method should return a promise to be resolved.

**2.** In ***controllers.js***, fill in the code in ```$scope.$watch``` method so the ```$scope.employees``` variable is updated 
on change in ```$scope.searchKey```.

**3.** Also in ***controllers.js***, Finish the ```$scope.clearSearch``` method to clear the ```$scope.searchKey``` variable and 
assign all employees to ```$scope.employees``` variable.

Please notice both these methods in controller should do their work after the promises from service are resolved (in then() callback). 