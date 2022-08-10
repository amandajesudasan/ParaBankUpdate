 // Register page Negative cases 
import loginDemo from '../e2e/1-getting-started/pageobject/loginDemo.cy' // POM 

it('login' ,function (){
  const lp = new loginDemo () //lp-login page 
  lp. Visit()
  

cy.xpath('//*[@id="loginPanel"]/p[2]/a').click()

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
 .type('kick')
 cy.get('input[name="customer.password"]')
 .type('kick1')
 cy.get('input[name="repeatedPassword"]')
 .type('kick11')
cy.xpath('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input').click()

cy.visit('https://parabank.parasoft.com/parabank/register.htm')

 // Enter the alphebetic & charcahter in the phone feild 

cy.wait(1000) 

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
cy.get('input[name="customer.phoneNumber"]') // bug // Charchter & alphebetic 
.type('17ABC09*7')
cy.get('input[name="customer.ssn"]')
.type('1326')
cy.get('input[name="customer.username"]')
.type('nisha')
cy.get('input[name="customer.password"]')
.type('nisha1')
cy.get('input[name="repeatedPassword"]')
.type('nisha1')
cy.xpath('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input').click() 

 });


