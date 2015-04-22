Let's start building the employee directory app. This app is original created by <a href="http://coenraets.org/blog/2014/02/sample-mobile-application-with-ionic-and-angularjs/" target="_blank">
Christophe Coenraets</a>. We encouge you to checkout his blog post and other wonderful apps he made.

### Home Page

In this chaper, we will build the home page of the app. The home page shows a list of current employees (names and titles). It also has a search bar on top of the page.

### The Logic and controller

In this exercise, we will build a list to show all employees.

**app.js** is the entry point of our app. First we inject ```ionic``` library, and define controller **EmployeeIndexCtrl**.

### Employees Data

First we need to have the employees data. Here we use a simple javascript object array to mock the data. In reality you will likely get them from database. 

The ```$scope.employees``` variable contains all the data. For each employee entry, there are ```firstName```, ```lastName```, ```title``` and `pic` attributes.

### Ionic list directive

The corresponding view is in the **index.html**. 

`<ion-list>` is used to display a list of items. The list consist of multiple `<ion-item>`. We use `ng-repeat` to populate the list with the 
`$scope.employees` defined in controller **EmployeeIndexCtrl**. Each item contains an employee's image, name and title.

If you know angular, you should feel right at home with these code. Essentially we are writing angular code in directives provided by ionic.

