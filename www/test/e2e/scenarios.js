describe('Test Movie Detail.', function(){
  
  describe('', function(){

    beforeEach(function() {
      browser.get('index.html');
      element(by.model('searchKey')).sendKeys('');
      element.all(by.repeater('movie in movies')).get(0).element(by.css('a')).click();
      browser.sleep(1000);     
    });
    
    it('Should redirect to the detail page when click the movie\'s record on home page. Go to the first movie\'s page.', function(){
      expect(element(by.css('.card .item')).isPresent()).toBe(true, 'Should be on detail page');
      var titleElem = element.all(by.css('.card .item')).get(0);
      var title = titleElem.element(by.css('h2')).getText();
      expect(title).toContain('Star Wars', 'There should be an h2 element contains movie\'title -- Star Wars.');
      expect(title).toContain('19770525', 'There should be an h2 element contains movie\'release date -- 19770525.');
    });
    
    it('Should show movie\'s plot, genres, rate, language, country, directors, actors in card view after image.', function(){
      var elements = element.all(by.css('.card .item'));
      element.all(by.css('.card .item')).then(function(allElems){
        expect(allElems.length).toBe(9);
        allElems[2].getInnerHtml().then(function(plot){
          expect(plot).toContain('Luke Skywalker joins forces', 'Should show movie plot.');
        });
        allElems[3].element(by.css('span')).getInnerHtml().then(function(genres){
          expect(genres).toContain('Action', 'Movie genere should contain Action.');
          expect(genres).toContain('Adventure', 'Movie genere should contain Adventure.');
          expect(genres).toContain('Fantasy', 'Movie genere should contain Fantasy.');
          expect(genres).toContain('Sci-Fi', 'Movie genere should contain Sci-Fi.'); 
        });
        allElems[4].element(by.css('span')).getInnerHtml().then(function(rate){
          expect(rate).toContain('PG', 'Movie rate should be PG.'); 
        });
        allElems[5].element(by.css('span')).getInnerHtml().then(function(lang){
          expect(lang).toContain('English', 'Movie language should be English.'); 
        });
        allElems[6].element(by.css('span')).getInnerHtml().then(function(country){
          expect(country).toContain('USA', 'Movie country should be USA.');
        });
        allElems[7].element(by.css('span')).getInnerHtml().then(function(director){
          expect(director).toContain('George Lucas', 'Movie director should be George Lucas.'); 
        });
        allElems[8].element(by.css('span')).getInnerHtml().then(function(actors){
          expect(actors).toContain('Mark Hamill', 'Movie actors should have Mark Hamill.');
          expect(actors).toContain('Harrison Ford', 'Movie actors should have Harrison Ford.');
          expect(actors).toContain('Carrie Fisher', 'Movie actors should have Carrie Fisher.');
        });
      });
    });
    
  });
  
});