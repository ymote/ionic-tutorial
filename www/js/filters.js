angular.module('movie.filters', [])

.filter('release', function(){
  return function(releaseDate){
    var year = releaseDate.slice(4);
    var month = releaseDate.slice(4,6);
    var day = releaseData.slice(6);
    var formattedDate = year+'/'+month+'/'+day;
    return formattedDate;
  };
});