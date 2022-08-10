// All the Postive cases 

import loginDemo from './1-getting-started/pageobject/loginDemo.cy'  // POM 

it('login' ,function (){

    const lp = new loginDemo () //lp-login page 
    lp. Visit()
    cy.wait(2000)
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
    .type('neem')
    cy.get('input[name="customer.password"]')
    .type('neem1')
    cy.get('input[name="repeatedPassword"]')
    .type('neem1') 
    
    cy.xpath('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input').click() //Resgister button 


//Open a new account

    cy.xpath('//*[@id="leftPanel"]/ul/li[1]/a').click() // open new account
    cy.wait(1000) 
    cy.get('select[id="type"]').select('1').should('have.value', '1') //select Savings
    cy.xpath('//*[@id="rightPanel"]/div/div/form/div/input').click() // open new account button
    cy.xpath('//*[@id="newAccountId"]').click() //click on the new account no


//Bill pay      
  
  cy.xpath('//*[@id="leftPanel"]/ul/li[4]/a').click() // Bill pay link
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
  .type('13899')
  cy.get('input[name="verifyAccount"]')
  .type('13899')
  cy.get('input[name="amount"]')
  .type('10000')
  cy.wait(2000)
  cy.get('select[name="fromAccountId"]').select('14121').should('have.value', '14121') // select the bank account no 
  cy.xpath('//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[14]/td[2]/input').click() //click the bill pay button
     
  // Find Transaction 

  cy.xpath('  //*[@id="leftPanel"]/ul/li[5]/a').click() // click on the find transaction 
  cy.xpath('  //*[@id="leftPanel"]/ul/li[5]/a').click() // click on the find transaction 
  cy.wait(1000)
  cy.get('select[id="accountId"]').select('14121').should('have.value', '14121') //select the account number
  cy.get('input[id="criteria.onDate"]').type('07-20-2022')  // find by date 
  cy.xpath('//*[@id="rightPanel"]/div/div/form/div[5]/button').click() // click on the find by date button 
  cy.wait(2000)

  cy.visit('https://parabank.parasoft.com/parabank/findtrans.htm')
  cy.get('input[id="criteria.fromDate"]').type('07-21-2022')  // find by date range between 
  cy.get('input[id="criteria.toDate"]').type('02-03-2022')    // find by date range 
  cy.xpath('//*[@id="rightPanel"]/div/div/form/div[7]/button').click()
  cy.visit('https://parabank.parasoft.com/parabank/findtrans.htm')
  cy.get('input[id="criteria.amount"]').type('10000') // Find by amount 
  cy.xpath('//*[@id="rightPanel"]/div/div/form/div[9]/button').click()
  cy.wait(1000)
    
  // Transfer funds 
  //bug- not selected the from account & to account 

  cy.xpath('//*[@id="leftPanel"]/ul/li[3]/a').click() // click the transfer funds 
  cy.get('input[name="input"]') // Enter amount 
  .type('10000')
  cy.wait(1000)
  cy.get('select[id="fromAccountId"]').select('13788').should('have.value', '13788') // select from Account
  cy.xpath('//*[@id="rightPanel"]/div/div/form/div[2]/input').click() //click on transfer button 


  })



