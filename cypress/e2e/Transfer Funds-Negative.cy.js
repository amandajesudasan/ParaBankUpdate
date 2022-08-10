describe('para bank ', function(){


  it('Visit the URL', function(){

  cy.visit('https://parabank.parasoft.com/parabank/index.htm');

  // Login 
  cy.wait(1000) 

  cy.get('input[name="username"]')
    .type('jack')

  cy.wait(1000) 
    
  cy.get('input[name="password"]')
  .type('jack1')

  cy.xpath('//*[@id="loginPanel"]/form/div[3]/input').click()

// Transfer Funds 

// Without Enter the Amount 

// bug

cy.xpath('//*[@id="leftPanel"]/ul/li[3]/a').click() // click the transfer funds 
     
cy.get('input[name="input"]') // Enter amount 
.type('10000')

cy.wait(1000)
cy.contains('From account #').click()
cy.get('select[id="fromAccountId"]').select(14232).should('have.value', 14232) // select from Account

cy.xpath('//*[@id="rightPanel"]/div/div/form/div[2]/input').click() //click on transfer button 




  });


});

