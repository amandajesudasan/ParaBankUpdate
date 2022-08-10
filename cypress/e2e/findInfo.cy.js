describe('para bank ', function(){


  it('Visit the URL', function(){

  cy.visit('https://parabank.parasoft.com/parabank/index.htm');


// Find Info 

cy.xpath('//*[@id="loginPanel"]/p[1]/a').click() // click the forgot info link 

cy.get('input[name="firstName"]') 
.type('amanda')

cy.wait(1000) 

cy.get('input[name="lastName"]') 
.type('jesudasan')

cy.wait(1000) 

cy.get('input[name="address.street"]') 
.type('161 gw road t')

cy.wait(1000) 

cy.get('input[name="address.city"]') 
.type('trincomalee')
cy.wait(1000) 
cy.get('input[name="address.state"]') 
.type('eastern')

cy.wait(1000) 

cy.get('input[name="address.zipCode"]') 
.type('31000')

cy.wait(1000) 
cy.get('input[name="ssn"]') 
.type('147')

cy.xpath('//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input').click()

  });



});