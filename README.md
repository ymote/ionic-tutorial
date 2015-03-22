For the final exercise, let's add a directive and a filter to polish the movie app a little bit.

### The rating directive

Currently the user rating is in number format, which is not very visually appealing. We will introduce a simple rating system, and 
use an image to represent each rating categories. In this exercise we implement a rating system similar to 
<a href="http://www.rottentomatoes.com/" target="_blank">rottentomatoes</a>.

### Directive

We add a new file ***directives.js***. In this file, we create a new module **movie.directives** and a new directive `score`. 
The directive has a one-way data binding to a `score` variable, and depending on its value, set a corresponding image in the 
directive's template. 

### The release date filter

Another thing we want to change is the presentation of release date. Currently it is a 8-digit number in the format of `YYYYMMDD`. 
There are a lot of ways to format date, here we choose a very simple format `yyyy/mm/dd` just show the idea.

This is a good case to use filter. In ***filters.js***, we add a new filter **releaseDate**. The filter receives a 8-digit number 
representing a date, and return a date string in the format `yyyy/mm/dd`. 

### View

Finally we change the displays of rating and release date in ***movie-index.html*** and ***movie-detail.html*** to use our cunstom 
**rating** directive and **releaseDate** filter. As they are self-contained, we don't need to change anything in services and 
controllers.



