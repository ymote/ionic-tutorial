describe('Test Employee Directory.', function(){
  
  describe('Employee detail page - James King. ', function(){
    //go to the detail page of James King
    beforeEach(function() {
      browser.get('index.html');
      element.all(by.css('.item-content')).get(0).click();
      browser.sleep(500);      
    });
    
    it('Should have the link to his reports just below the name.', function(){
      var elements = element.all(by.css('a.item'));
      checkLinkItem(elements, 0, '#/employees/1/reports');
    });
 
    it('Should go to the report page when click the first item link and show the 4 reports.', function(){
      element.all(by.css('a.item')).get(0).click();
      expect(element(by.css('.reports')).isPresent()).toBe(true);
      expect(element.all(by.css('.reports .item')).count()).toBe(5);
      var elements = element.all(by.css('.reports a.item'));
      checkLinkItem(elements, 0,'#/employees/2');
      checkLinkItem(elements, 1,'#/employees/3');
      checkLinkItem(elements, 2,'#/employees/4');
      checkLinkItem(elements, 3,'#/employees/5');
      
      var julie = element.all(by.css('a.item')).get(0);
      var image = julie.element(by.css('img'));
      var name = julie.element(by.css('span'));
      var title = julie.element(by.css('p'));
      
      image.getAttribute('src').then(function(attr){
        expect(attr).toContain('Julie_Taylor.jpg', 'The first report should be Julie Taylor and show her image.');
      });
      
      expect(name.getInnerHtml()).toContain('Julie', 'The first report should have <span> contains Julie');
      expect(name.getInnerHtml()).toContain('Taylor', 'The first report should have <span> contains Taylor');
      expect(title.getInnerHtml()).toContain('VP of Marketing', 'The first report should have <p> contains VP of Marketing');
      
    });
  });
    
  var checkLinkItem = function(index, textToHave){
    var elem = element.all(by.css('a.item')).get(index);
    elem.getAttribute('href').then(function(attr){
      expect(attr).toContain(textToHave, 'The '+(index+1)+' item should have content '+textToHave);
    });
  };

});