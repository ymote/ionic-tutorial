angular.module('movie.filters', [])

.filter('releaseDate', function(){
  return function(releaseDate){
    releaseDate = releaseDate.toString(); 
    var year = releaseDate.slice(0,4);
    var month = releaseDate.slice(4,6);
    var day = releaseDate.slice(6);
    var formattedDate = year+'/'+month+'/'+day;
    return formattedDate;
  };
});