describe('Test Employee Directory.', function(){
  
  describe('', function(){

    beforeEach(function() {
      browser.get('index.html');
    });
    
    it('Should redirect to James King\'s page when click the first item in list.', function(){
      element.all(by.css('.item-content')).get(0).click();
      browser.sleep(1000);
      expect(element(by.css('.card')).isPresent()).toBe(true, 'Expect to have a card view.');
      expect(element.all(by.css('.card .item')).count()).toBe(5, 'There should be 5 div with class \'item\' in card view.');
      expect(element(by.css('.item-avatar h2')).getText()).toBe('James King', 'The h2 tag should show \'James King\'');  
      checkLinkItem(0, '781-000-0001');
      checkLinkItem(1, '617-000-0001');
      checkLinkItem(2, '617-000-0001');
      checkLinkItem(3, 'jking@fakemail.com');      
    });
    
    var checkLinkItem = function(index, textToHave){
      var elem = element.all(by.css('a.item')).get(index);
      elem.getAttribute('href').then(function(attr){
        expect(attr).toContain(textToHave, 'The '+(index+2)+' item should hve content '+textToHave);
      });
    };
  });

});