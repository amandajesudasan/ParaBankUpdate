// Transfer Funds Negative cases 
import loginDemo from '../e2e/1-getting-started/pageobject/loginDemo.cy' // POM 

  it('login' ,function (){
   const lp = new loginDemo () //lp-login page 
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
    .type('jeny')
    cy.get('input[name="customer.password"]')
    .type('jeny1')
    cy.get('input[name="repeatedPassword"]')
    .type('jeny1') 
    
    cy.xpath('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input').click() //Resgister button 
 


// Without Enter the Amount 
// bug
cy.xpath('//*[@id="leftPanel"]/ul/li[3]/a').click() // click the transfer funds 
cy.get('input[name="input"]') // Enter amount 
cy.contains('From account #').click()
cy.get('select[id="fromAccountId"]').select('14121').should('have.value', '14121') // select from Account
cy.xpath('//*[@id="rightPanel"]/div/div/form/div[2]/input').click() //click on transfer button 

});



