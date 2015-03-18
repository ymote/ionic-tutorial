The index page is complete. It features a list of employees and a search bar to search the list.

Now we start working on the detail page for individual employee. Recall in the ```employees``` variable in ***services.js***, each employee 
has many attributes. These information will be displayed on the detail page.

### Router to new page

The first thing is to add another router in ***app.js*** -- state ```employee```. Notice we have a dynamic segment in url 
```:employeeId```. This will be available as ```$stateParam.employeeId``` to controllers. It contains the identity for the employee to be shown.

### Service, get employee data

We now have a ```findById``` method in ***services.js***, which expecting an integer represents the 1 based index 
of employee in the ```employees``` variable. We simply get the employee object from the array, and return it. Notice all methods in services return promises.

### EmployeeDetailCtrl Controller

The ***controllers.js*** defines another controller for the employee detail page. It will run when url is ```/employees/:employeeId```. 

Thanks to the ui-router, we can retrive the employee id through ```$stateParam.employeeId```. We need to pass it to ```findById``` method in ***services.js*** and 
attach the returned employee to ```$scope```.

### The Employee Detail View

Up to now, what we are doing is exactly the same as developing a web app. The view is where ionic shines and makes all the differnces for mobile app. 

We have a new view file ***employee-detail.html***. Inside it, we use another very common widget on mobile device -- card view. 
It is a great way to contain and organize information. 

In Ionic, it is also possible to use css classes directly to style our view. in the ***employee-detail.html***, 
we have a ```<div>``` with classes ```list card```. Inside this ```<div>```, we have several ```<div>``` to represent items in the card view. 
The css apporach is very straightfoward and flexible to construct a custom view. 

### Developing as this is a web app

With all the urls, routing, and CSS, clearly our mindset is in the development of  a web application. 
Ionic and Cordova make sure all these ideas work in a mobile app. These is the greatness of the hybrid app apporach. 


