Let's start building the employee directory app. This app is original created by <a href="http://coenraets.org/blog/2014/02/sample-mobile-application-with-ionic-and-angularjs/" target="_blank">
Christophe Coenraets</a>. We encouge you checkout his blog post and other wonderful apps he made.

**Index Page**

In this chaper, we will build the home page of the app. The home page shows a list of current employees, with their names and titles. It also has a search bar so we can search for employees 
based on name. The snapshot of app :

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "index page")


**List component**

In this exercise, we will build the list to show all employees. 

First we need to have the employees data to be displayed. Here we use a simple javascript object array to mock the data. In reality you will likely get them from database, and then also use 
array to store them in front-end. Take a look at ***www/services.js***, the ```employees``` variable contains all the data. For each employee entry, there is ```firstName```, ```lastName```, ```title``` 
among other attributes.

The ```EmployeeService``` factory provides interface for data. In the ```findAll``` method, we have a promise to return the ```employees``` array. It is not necessary here to use a promise, we 
can just simply return the array. However if the system is hooked to a database, it is important all methods talking with database are promise based.

The ***www/js/app.js*** is the entry point of our app. First we inject ```ionic``` library, and our ```controllers``` and ```services```. In the config section, we use the popular 
<a href="https://github.com/angular-ui/ui-router">Angular ui-router</a> to define the routing for our app. For detail information, please take a look at their github repository.

In ***www/js/controllers.js***, we define the ```EmployeeIndexCtrl```. With the injection of ```EmployeeService```, we can use the ```findAll``` method to populate our ```$scope.employees``` with 
the employees data.

The corresponding view for the controller is ```www/templates/employee-index.html```. It will substitute the ```<ion-nav-view></ion-nav-view>``` in ```www/index.html```. It is a 
```<ion-view>``` directive. The ```view-title``` attribute will show at the top header bar of our app.

In the view, we define a ```<ion-content>``` to hold the content, which is a ```<ion-list>```. The list is composied of multiple ```<ion-item>```, we use ```ng-repeat``` to populate it with the 
```$scope.employees``` in controller. Each item is consist of employee's image, name and title.

If you know angular, you should feel right at home with these code. Essentially we are writing angular code in directives provided by ionic.

