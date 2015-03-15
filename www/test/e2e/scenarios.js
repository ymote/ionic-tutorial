describe('Test Sort Movies.', function(){
  
  describe('', function(){
    
    var selectPopoverItem = function(i){
      element(by.css('.popover-button')).click();
      browser.sleep(1000);
      element(by.css('.popover .item:nth-child('+i+')')).click();
    };

    var getFirstTitle = function(){
      var firstMovie = element.all(by.repeater('movie in movies')).get(0);
      var title = firstMovie.element(by.css('.movie-intro h2')).getText();
      return title;
    };

    beforeEach(function() {
      browser.get('index.html');
    });
    
    it('Should show the 4 sort options in the popver menu when the popover button is clicked.', function(){
      element(by.css('.popover-button')).click();
      expect(element(by.css('.popover')).isPresent()).toBeTruthy();
      element.all(by.css('.popover .item')).then(function(links){
        expect(links).not.toBe(null);
        expect(links.length).toBe(4, 'There should be 4 links in the menu.');
      });
    });

    it('Should sort movies by title in both directions using "Sort by Title" from popover menu.', function(){
      element(by.model('searchKey')).sendKeys('');
      selectPopoverItem(1);
      var title = getFirstTitle();
      expect(title).toEqual('V for Vendetta', 'Reverse sort by title, the first movie should be \'V for Vendetta\'');
      selectPopoverItem(1);
      title = getFirstTitle();
      expect(title).toEqual('A Beautiful Mind', 'Sort by title, the first movie should be \'A Beautiful Mind\'');
    });

    it('Should sort movies by rating in both directions using "Sort by Rating" from popover menu.', function(){
      element(by.model('searchKey')).sendKeys('');
      selectPopoverItem(2);
      var title = getFirstTitle();
      expect(title).toEqual('The Godfather', 'Sort by rating from high to low, the first movie should be \'The Godfather\'.');
    });

    it('Should sort movies by release date in both directions using "Sort by Release Date" from popover menu.', function(){
      element(by.model('searchKey')).sendKeys('');
      selectPopoverItem(3);
      var title = getFirstTitle();
      expect(title).toContain('Mission: Impossible', 'Sort by Release Date from new to old, the first movie should be \'Mission: Impossible\'');
    });

    it('Should sort movies by release date in both directions using "Sort by Porpularity" from popover menu.', function(){
      element(by.model('searchKey')).sendKeys('');
      selectPopoverItem(4);
      var title = getFirstTitle();
      expect(title).toEqual('The Dark Knight', 'Sort by popularity from popular to unpopular, the first movie should be \'The Dark Knight\'');
    });
    
  });
  
});