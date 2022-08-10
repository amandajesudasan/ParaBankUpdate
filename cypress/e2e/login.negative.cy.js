describe('para bank login nehative', function(){


  it('Visit the URL', function(){

    cy.visit('https://parabank.parasoft.com/parabank/index.htm');




//login


// Without Enter the field 
cy.wait(1000) 

//cy.get('input[name="username"]') // withoutEnter the UserName


cy.wait(1000) 
  
//cy.get('input[name="password"]') //Without Enter the password 

cy.xpath('//*[@id="loginPanel"]/form/div[3]/input').click() // Click on the loin button 


// Enter Valid Username & Invalid password 

cy.wait(1000) 

  cy.get('input[name="username"]') // Valid Username 
  .type('jack')

  cy.wait(1000) 
  
  cy.get('input[name="password"]') // Valid Password 
  .type('jack')

  cy.xpath('//*[@id="loginPanel"]/form/div[3]/input').click() //Click on the login button 


  // Enter invalid Username & Valid password 

  cy.get('input[name="username"]') // Valid Username 
  .type('jack')

  cy.wait(1000) 
  
  cy.get('input[name="password"]') // Valid Password 
  .type('jack1')

  cy.xpath('//*[@id="loginPanel"]/form/div[3]/input').click() //Click on the login button 












});







});