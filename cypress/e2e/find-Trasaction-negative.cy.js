// Find Transaction negative cases 
import loginDemo from '../e2e/1-getting-started/pageobject/loginDemo.cy' // POM 

it('login' ,function (){

    const lp = new loginDemo () // lp-login page 
    lp. Visit()
    
    cy.contains("a", "Register").click(); // Click on the Register link 

    cy.get('input[name="customer.firstName"]')
    .type('Alexa')
    cy.get('input[name="customer.lastName"]')
    .type('David')
    cy.get('input[name="customer.address.street"]')
    .type('14 Greek lane ')
    cy.get('input[name="customer.address.city"]')
    .type('Los Angels')
    cy.get('input[name="customer.address.state"]')
    .type('California')
    cy.get('input[name="customer.address.zipCode"]')
    .type('1471')
    cy.get('input[name="customer.phoneNumber"]')
    .type('174632896')
    cy.get('input[name="customer.ssn"]')
    .type('1326')
    cy.get('input[name="customer.username"]')
    .type('niki')
    cy.get('input[name="customer.password"]')
    .type('niki1')
    cy.get('input[name="repeatedPassword"]')
    .type('niki1') 
    
    cy.xpath('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input').click() //Resgister button 

 
   // Find Trabsaction negative 

  // Without enter tansaction method and click in every find by transaction button 

  
  cy.xpath('  //*[@id="leftPanel"]/ul/li[5]/a').click() // click on the find transaction 
  cy.xpath(' //*[@id="rightPanel"]/div/div/form/div[3]/button').click() // click on the Transaction  button 
  cy.xpath(' //*[@id="rightPanel"]/div/div/form/div[5]/button').click() // click on the Transaction  button 
  cy.xpath(' //*[@id="rightPanel"]/div/div/form/div[7]/button').click() // click on the Transaction  button 
  cy.xpath(' //*[@id="rightPanel"]/div/div/form/div[9]/button').click() // click on the Transaction  button 

  
 


  });




