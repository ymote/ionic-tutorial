An Ionic app is basically a web page, we need to have an index.html file in our app which defines the first page that loads in the app. 
Let's take a look at the **www/index.html** :

In the ```<header>``` section, we include both CSS and JS from Ionic library. We also include our custom style.css file, which is empty now.

Also note that the cordova.js  will not be found when opened in web browser. It will be automatically included when running or emulating app on mobile devices. 
It is used to access native device APIs.

Finally we include our app.js, which bootstraps the ionic app.

Ionic comes with very native-styled mobile UI elements and layouts that you'd get with a native SDK on iOS or Android but didn't really exist before on the web. 
These components are in the form of angular directive.

The ```<body>```section showcases the directives ionic pre-built for us. First we have a ```<ion-pane>```, it is a simple container that fits content. 

Inside it, ```<ion-header-bar>```adds a fixed header bar above ```<ion-content>```. Inside ```<ion-header-bar>```, we have a h1 tag showing the title for the app.
On a mobile device, this will show at the top header bar.

The ionContent directive provides an easy to use content area. Currently the content is empty.

Now let's take a look at the boilerplate code in **www/js/app.js**. This essentially bootstrap a ionic app. Usually we don't need to change it.

Follow angular's tradition, the ionic module is injected into our app, so we can include the directives belongs to ionic ```<ion-pane>```,```<ion-header-bar>```,```<ion-content>```. 
We will see more directives in the future exercises.

If you preview the app in browser or mobile phone, you will see a blank app with a grey title. Without writing a single line of code, we have built a hybrid app can run on mobile devices. Pretty sweet!

Essentially ionic is a UI library built upon angular. It provides native style widgets, abstract away the detailed implementations. So as developers, we only need to get familiar with 
the directives exposed by ionic and our app will automatically work on mobile devices.

In this course, we will built on the code here to make it a fully functional app to show employee directory.