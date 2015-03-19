In the last exercise, the index page need to load 91 movies on startup. We have to wait for a few moments before the page show up. 
Imagine we have thousands of movies in the json file, the performance of our app would be unbearable.

### Pagination

A more efficient way to load data is using pagination, which only load more data upon user request. A very popular way of pagination 
is infinite scrolling. It provides a very smooth user experience as the data is automatically loaded when users scroll to the bottom 
of the page. We will implement the infinite scrolling in this exercise.

### Infinite scrolling

As infinite scrolling is so porpular, ionic provides a directive just for it -- ```<ion-infinite-scroll>```.

It takes care of loading more data when users get to the bottom of page. Its api requires us to implement ```on-infinite``` method, 
which will be called to get more data.

### Service

To implement infinite scrolling, first we need to change the way of retriving data. We start by loading a small chunk of data and keeping 
track of the size of already loaded data. The following requests will continute from where we stop last time. 

Let's look at the actual implementation. In ***services.js***, since we are using a json file, we still load all movies in to ```movies``` 
variable initially and then mimic pagination by extracing data from it. In a production envrionment, you will likely to use a database to 
store all the data, which inherently support data pagination.

We added three methods ```loadPage```, ```hasMore``` and ```getMovies```. Let's image our data is stored in a book. Each page have a fixed number 
of items (```limit```), and based on this value and the total size of our data, we can calculate the number of pages (```numPages```) in the book. 
Pagination essentially is to retrive data on a page (```pageNum```) of the book, which is the ```[pageNum*limit, (pageNum+1)*limit)``` range in 
data.

The ```loadPage``` method is used to retrive data given a ```pageNum``` and size of data in a page ```limit```. 

The ```hasMore``` methos is to determine if there are more data to load given the same parameters.

Finally ```getMovies``` get movies data utilize the upper two methods.

### Controller

We set the limit and currentPage variable in ```MovieHomeCtrl``` to load 20 movies initially. We will add inifinite scrolling in the next exercise.

From now on, we start working with the Javascript APIs provided by Ionic. This will give us a more deeper understanding of the Ionic Framework.





