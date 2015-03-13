The index page is complete. It now features a list of employees and a search bar to search the list.

Now we start working on the detail page for individual employee. Recall in the ```employees``` variable in ***services.js***, each employee 
has many attributes. These information will be displayed on the detail page.

** Router **

The first thing is to add anouther router in ***app.js***. We define another state ```employee```. Notice we have a dynamic segment in url 
```:employeeId```. This will be available as ```$stateParam.employeeId``` to controllers. It contains the identity for the employee to be shown.

** Service **

Again we start with the change in ***services.js***. We now have a ```findById``` method, which expecting an integer represents the 1 based index 
of employee in ```employees```. We simply get the employee object from the array, and return it. Notice all methods in services return promises.

** EmployeeDetailCtrl Controller **

The ***controllers.js*** defines another controller for the employee detail page. This controller will run when url is ```/employees/:employeeId```. 
We are still thinking as this is a web app with the url and routing. Ionic and Cordova will make sure all these ideas also work in a mobile app.

Thanks to angular ui-router, we can retrive the employee id through ```$stateParam.employeeId```, which is exactly what we are doing in 
```EmployeeDetailCtrl```. We need to pass it to ```findById``` method in ***services.js*** and attach the returned employee to ```$scope```.

** View **

Up to now, what we are doing is exactly the same as developing a web app. The view is where ionic shines and makes all the differnces for mobile app. 

We have a new view file ***templates/employee-detail.html***. Here we use another very common widget on mobile device -- card view. 
It is a great way to contain and organize information. 

Ionic is a UI framework, so besides its directive utilities, it is also possible to use css classes it provided to style our view. in the ***employee-detail.html***, 
we have a ```<div>``` with classes ```list card```. Inside this ```<div>```, we have several ```<div>``` to represents the items in the card view. 
The pure css apporach make it very easy to construct a native view for our app. 


