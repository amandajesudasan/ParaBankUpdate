describe('para bank ', function(){


  it('Visit the URL', function(){

  cy.visit('https://parabank.parasoft.com/parabank/index.htm');


// Login part 

  cy.wait(1000) 

  cy.xpath('//*[@id="loginPanel"]/p[1]/a').click() // click the forgot info link 

  cy.wait(2000) 

  cy.xpath('//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input').click() // click the find my login info 


  
  
  });



});
