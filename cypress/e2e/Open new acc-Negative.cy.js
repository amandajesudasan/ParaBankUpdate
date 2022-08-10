describe('para bank login nehative', function(){


  it('Visit the URL', function(){

  cy.visit('https://parabank.parasoft.com/parabank/index.htm');


// Login part 

  cy.wait(1000) 

  cy.get('input[name="username"]')
    .type('jack')

    cy.wait(1000) 
    
    cy.get('input[name="password"]')
    .type('jack1')

   cy.xpath('//*[@id="loginPanel"]/form/div[3]/input').click()


  // Open New Account Ngative scenarios 

    cy.wait(1000) 
    cy.xpath('//*[@id="leftPanel"]/ul/li[1]/a').click() // open new account
    cy.wait(1000) 
    cy.get('select[id="type"]').select('1').should('have.value', '1') //select Savings
      
    cy.wait(1000)
     
    cy.xpath('//*[@id="rightPanel"]/div/div/form/div/input').click() // open new account button
    cy.wait(1000) 

    cy.xpath('//*[@id="newAccountId"]').click() //click on the new account no








  });

});