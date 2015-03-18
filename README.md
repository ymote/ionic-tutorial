Let's start building the employee directory app. This app is original created by <a href="http://coenraets.org/blog/2014/02/sample-mobile-application-with-ionic-and-angularjs/" target="_blank">
Christophe Coenraets</a>. We encouge you to checkout his blog post and other wonderful apps he made.

## Home Page

In this chaper, we will build the home page of the app. The home page shows a list of current employees (names and titles). It also has a search bar on top of the page. The snapshot of app :

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "index page")


## Employees Data

In this exercise, we will build a list to show all employees. 

First we need to have the employees data. Here we use a simple javascript object array to mock the data. In reality you will likely get them from database. 

Take a look at ***services.js***, the ```employees``` variable contains all the data. For each employee entry, there are ```firstName```, ```lastName```, ```title``` 
among other attributes.

The ```EmployeeService``` factory is the interface to data. In the ```findAll``` method, we have a promise to return the ```employees``` array. 

It is not necessary here to use a promise, as the data is a simple array. Yet a production system is often hooked to a database, it is important all methods interacting with database are promise based.

## The Logic and controller

***app.js*** is the entry point of our app. First we inject ```ionic``` library, and our own ```controllers``` and ```services```. 

In the config section, we use the popular <a href="https://github.com/angular-ui/ui-router">Angular ui-router</a> to define the routing for our app. 
For detail information, please take a look at their github repository.

In ***controllers.js***, we define controller ```EmployeeIndexCtrl```, and inject ```EmployeeService```.

We need to populate the ```$scope.employees``` using ```EmployeeService.findAll``` method. 

## Ionic list directive

The corresponding view for the controller is ```employee-index.html```. It replace the ```<ion-nav-view></ion-nav-view>``` in ```index.html```. It is a ```<ion-view>``` directive. 
The ```view-title``` attribute will show at the top header bar of our app.

```<ion-list>``` is used to display a list of items. The list consist of multiple ```<ion-item>```. We use ```ng-repeat``` to populate the list with the 
```$scope.employees``` in controller. Each item contains an employee's image, name and title.

If you know angular, you should feel right at home with these code. Essentially we are writing angular code in directives provided by ionic.

