This exercise is the final feature of our Employee Directory App. If you look at the ```employees``` variable in ***services.js***, there is one last attribute we have not 
included -- ```managerId```. For a company/organization, each employee may have a supervisor. The Manager also need to see who should report to him/her.

In this exercise, we add another page -- the report page, so a supervisor can manage his/her group. For a employee, the ```managerId``` represents the index of the manager 
in the ```employees``` array. E.g. James King dose not have a manager (he is the CEO), his ```managerId``` is 0. There are 4 employees with ```managerId``` 1, meaning he has 
4 employees reporting to him. Let's work on this feature.

** Service **

In ***services.js***, we now have a method ```findByManager``` which returns a promise to be resolved. The method is given a ```managerId```, it should search through 
```employees``` to filter employees with managerId and reolve these employees.

** Router and Resolve **

The big change is in the routers in ***app.js***. Thanks to ui-router, we can add a ```resolve``` section in the ```$state```. From ui-router documentation, 

> If any of these dependencies are promises, they will be resolved and converted to a value before the controller is instantiated. 
The resolve property is a map object. The map object contains key/value pairs.

Since our services return promises, we can readily resolve them in ui-router, so in controller, we can expect to have actual employee(s) object available as parameter.

Take a look at ```EmployeeDetailCtrl```. Since in  ```$state employee```, the employee is resolved, we can expect employee available as function parameter, and assign it 
to ```$scope.employee```.

Now for the ```EmployeeReportsCtrl```, we need to get the manager (the employee from :employeeId in url segment), and his/her reports from the ```findByManager``` method 
in ***services.js***. We can resolve both these objects in the router, so the controller is much cleaner.

**View**

Finally we need to contruct a view page ***templates/employee-reports.html** to show all reporters of a employee. We can use a card view to display. The first item in card 
is the information of manager, with the rest items represent his/her reporters.

