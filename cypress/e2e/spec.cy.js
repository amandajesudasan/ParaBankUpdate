const cypressConfig = require("../../cypress.config");

describe('Para Bank',function(){



it('Visit the URL', function(){

  cy.visit('https://parabank.parasoft.com/parabank/index.htm');


});


it('Click the Register with para bank',function(){

 // cy.get('register.htm').click();
 cy.contains("a", "Register").click();

 


  //it('Register with para bank',function(){

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
    .type('Mac')


    cy.get('input[name="customer.password"]')
    .type('mac1')

    cy.get('input[name="repeatedPassword"]')
    .type('mac1')

    cy.xpath('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input').click()


});




       

});


