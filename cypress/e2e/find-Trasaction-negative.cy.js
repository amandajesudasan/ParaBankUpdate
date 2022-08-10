describe('para bank ', function(){


  it('Visit the URL', function(){

  cy.visit('https://parabank.parasoft.com/parabank/index.htm');


  cy.wait(1000) 

  cy.get('input[name="username"]')
 .type('jack')

  cy.wait(1000) 
    
  cy.get('input[name="password"]')
  .type('jack1')

  cy.xpath('//*[@id="loginPanel"]/form/div[3]/input').click()


  // Find Trabsaction negative 

  // Without enter tansaction method and click in every find by transaction button 

  
  cy.xpath('  //*[@id="leftPanel"]/ul/li[5]/a').click() // click on the find transaction 

  cy.xpath(' //*[@id="rightPanel"]/div/div/form/div[3]/button').click()

  cy.wait(1000) 

  cy.xpath(' //*[@id="rightPanel"]/div/div/form/div[5]/button').click()

  cy.wait(1000) 

  cy.xpath(' //*[@id="rightPanel"]/div/div/form/div[7]/button').click()

  cy.wait(1000) 

  cy.xpath(' //*[@id="rightPanel"]/div/div/form/div[9]/button').click()

  
  //   //*[@id="rightPanel"]/div/div/form/div[3]/button


  });

});


