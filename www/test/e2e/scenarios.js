describe('Test Search Movies.', function(){
  
  describe('', function(){

    beforeEach(function() {
      browser.get('index.html');
    });
    
    it('Should show 4 star wars movies when search with keyword "start wars".', function(){
      element(by.model('searchKey')).sendKeys('star wars');
      
      element.all(by.repeater('movie in movies')).then(function(movies){
        expect(movies).not.toBe(null);
        expect(movies.length).toBe(4, 'There should be 4 movies on page.');
      });
    });

    it('Should show 2 matrix movies when search with keyword "matrix".', function(){
      element(by.model('searchKey')).sendKeys('matrix');
      
      element.all(by.repeater('movie in movies')).then(function(movies){
        expect(movies).not.toBe(null);
        expect(movies.length).toBe(2, 'There should be 2 movies on page.');
      });
    });
    
    it('Should clear searching and show default movies when clear the searchKey input.', function(){
      element(by.model('searchKey')).sendKeys('');
      
      element.all(by.repeater('movie in movies')).then(function(movies){
        expect(movies).not.toBe(null);
        expect(movies.length).toBe(20, 'Default there should be 20 movies on page because of pagination.'); //default show 20 movies
      });    
    });
  });
  
});