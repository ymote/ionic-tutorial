describe('Test Movie App.', function(){
  
  describe('', function(){

    beforeEach(function() {
      browser.get('index.html');
      browser.sleep(1000);     
    });
    
    it('Should have all movies on the index page.', function(){
      element.all(by.repeater('movie in movies')).then(function(movies){
        expect(movies.length).toBe(91, 'There should be 91 movies total on the index page.');
      });
      var firstMovie = element.all(by.repeater('movie in movies')).get(0);
      firstMovie.element(by.css('h2')).getInnerHtml().then(function(name){
        expect(name).toContain('Star Wars', 'The first movie title should be \'Star Wars\', it should be in <h2> element.');
      });
      firstMovie.element(by.css('p')).getInnerHtml().then(function(p){
        expect(p).toContain('19770525', 'The first movie release date should be 19770525, it should be in <p> element.');
        expect(p).toContain('8.8', 'The first movie rating should be 8.8, it should be in <p> element.');
      });
    });
    
  });
  
});