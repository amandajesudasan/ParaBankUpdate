
//Bill payment Negative cases 
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
    .type('surya')
    cy.get('input[name="customer.password"]')
    .type('surya1')
    cy.get('input[name="repeatedPassword"]')
    .type('surya1') 
    
    cy.xpath('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input').click() //Resgister button 

 
cy.xpath('//*[@id="leftPanel"]/ul/li[4]/a').click() 

// bill pay negative 

// Without Enter the field 
cy.xpath('//*[@id="leftPanel"]/ul/li[4]/a').click() // bill pay link
cy.xpath('//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[14]/td[2]/input').click() //click the bill pay button

// Enter the different account & verify account 

 cy.xpath('//*[@id="leftPanel"]/ul/li[4]/a').click() // bill pay link
 cy.get('input[name="payee.name"]')
.type('rosy')
 cy.get('input[name="payee.address.street"]')
.type('123 Green Road')
 cy.get('input[name="payee.address.city"]')
.type('Colombo')
 cy.get('input[name="payee.address.state"]')
.type('Western')
 cy.get('input[name="payee.address.zipCode"]')
.type('01000')
 cy.get('input[name="payee.phoneNumber"]')
.type('0741234789')
 cy.get('input[name="payee.accountNumber"]')
.type('1111')
 cy.get('input[name="verifyAccount"]')
.type('1000')
 cy.get('input[name="amount"]')
.type('10000')
 cy.wait(1000)
 cy.get('select[name="fromAccountId"]').select('14121').should('have.value', '14121') 
 cy.xpath('//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[14]/td[2]/input').click() //click the bill pay button

// Enter the Phone number with alphebetic 

cy.xpath('//*[@id="leftPanel"]/ul/li[4]/a').click() // bill pay link
cy.get('input[name="payee.name"]')
.type('rosy')
cy.get('input[name="payee.address.street"]')
.type('123 Green Road')
cy.get('input[name="payee.address.city"]')
.type('Colombo')
cy.get('input[name="payee.address.state"]')
.type('Western')
cy.get('input[name="payee.address.zipCode"]')
.type('01000')
cy.get('input[name="payee.phoneNumber"]')
.type('07ABC10347')
cy.get('input[name="payee.accountNumber"]')
.type('1111')
cy.get('input[name="verifyAccount"]')
.type('1111')
cy.get('input[name="amount"]')
.type('10000')
cy.wait(1000)
cy.get('select[name="fromAccountId"]').select('14676').should('have.value', '14676') 
cy.xpath('//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[14]/td[2]/input').click() //click the bill pay button


  });





