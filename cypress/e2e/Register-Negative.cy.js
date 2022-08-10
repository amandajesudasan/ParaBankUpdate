describe('para bank ', function(){

it('Visit the URL', function(){
cy.visit('https://parabank.parasoft.com/parabank/index.htm');

// register page Negative scenarios 

cy.wait(2000) 

  cy.xpath('//*[@id="loginPanel"]/p[2]/a').click()

   // Without Enter the feild 

   
cy.wait(2000) 

  cy.xpath('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input').click()


  // Enter the different different password & confirm password 


cy.wait(2000) 

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
    .type('loky')


    cy.get('input[name="customer.password"]')
    .type('loky')

    cy.get('input[name="repeatedPassword"]')
    .type('loky1')

    cy.xpath('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input').click()





cy.visit('https://parabank.parasoft.com/parabank/register.htm')

 // Enter the alphebetic & charcahter in the phone feild 
cy.wait(2000) 
cy.wait(1000) 

    cy.get('input[name="customer.firstName"]')
    .type('Alexa')

    cy.wait(1000) 
    
    cy.get('input[name="customer.lastName"]')
    .type('David')

    cy.wait(1000) 

    cy.get('input[name="customer.address.street"]')
    .type('14 Greek lane ')

    cy.wait(1000) 

    cy.get('input[name="customer.address.city"]')
    .type('Los Angels')

    cy.wait(1000) 

    cy.get('input[name="customer.address.state"]')
    .type('California')
    
    cy.wait(1000) 
    cy.get('input[name="customer.address.zipCode"]')
    .type('1471')

    cy.get('input[name="customer.phoneNumber"]') // bug // Charchter & alphebetic 
    .type('17ABC09*7')

    cy.get('input[name="customer.ssn"]')
    .type('1326')

    cy.get('input[name="customer.username"]')
    .type('loky')


    cy.get('input[name="customer.password"]')
    .type('loky')

    cy.get('input[name="repeatedPassword"]')
    .type('loky')

    cy.xpath('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input').click()



  });

});
