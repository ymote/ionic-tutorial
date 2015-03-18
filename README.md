We need to have an index.html file in our app which defines the first page to load when the app starts. 
Let's take a look at the ***index.html***:

## The View

In the ```<header>``` section, we include both CSS and JS from Ionic library, and cordova.js, which is used to access native device APIs.

Finally we include our ***app.js***, which bootstraps the ionic app.

Ionic comes with very native-styled UI elements and layouts. These components are in the form of angular directives.

The ```<body>```section showcases some directives. First we have a ```<ion-pane>```, it is a simple container that fits content. 

Inside it, ```<ion-header-bar>```adds a fixed header bar above ```<ion-content>```. 

Inside ```<ion-header-bar>```, we have a ```h1``` tag showing the title for the app. On a mobile device, this will show at the top header bar.

```<ion-content>``` provides an easy to use content area. Currently it is empty.

## Javascript

Now let's look at the boilerplate code in ***app.js***. This essentially bootstrap an ionic app. Usually we don't need to change it.

The ionic module is injected into our app on line 6. So we can use directives from ionic.

If you preview the app in browser or on your phone, you will see an app with a grey title. Pretty sweet!

Ionic is a UI library built on angular. It provides native style widgets, abstract away the detailed implementations. 
Building on its APIs, applications will look great on mobile devices.

In this course, we will start from the code here to make two fully functional apps.