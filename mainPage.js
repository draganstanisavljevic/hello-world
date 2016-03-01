// spec.js
describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });


  it('should add four and six', function() {
	firstNumber.sendKeys(4);
    secondNumber.sendKeys(6);

    goButton.click();
    // Fill this in.
    expect(latestResult.getText()).toEqual('10');
	
	firstNumber.sendKeys(1);
    secondNumber.sendKeys(1);

    goButton.click();
    // Fill this in.
    expect(latestResult.getText()).toEqual('2');
	
	expect(history.count()).toEqual(2);
  });
});