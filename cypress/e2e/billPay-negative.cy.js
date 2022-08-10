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

// bill pay negative 

// Without Enter the field 
cy.xpath('//*[@id="leftPanel"]/ul/li[4]/a').click() // bill pay link

cy.wait(1000) 
cy.xpath('//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[14]/td[2]/input').click() //click the bill pay button

// Enter the different account & verify account 

 
cy.xpath('//*[@id="leftPanel"]/ul/li[4]/a').click() // bill pay link

cy.get('input[name="payee.name"]')
.type('rosy')
cy.wait(1000)
cy.get('input[name="payee.address.street"]')
.type('123 Green Road')
cy.wait(1000)
cy.get('input[name="payee.address.city"]')
.type('Colombo')
cy.wait(1000)
cy.get('input[name="payee.address.state"]')
.type('Western')
cy.wait(1000)
cy.get('input[name="payee.address.zipCode"]')
.type('01000')
cy.wait(1000)
cy.get('input[name="payee.phoneNumber"]')
.type('0741234789')
cy.wait(1000)
cy.get('input[name="payee.accountNumber"]')
.type('1111')
cy.wait(1000)
cy.get('input[name="verifyAccount"]')
.type('1000')
cy.wait(1000)
cy.get('input[name="amount"]')
.type('10000')

cy.wait(1000)

cy.get('select[name="fromAccountId"]').select('14454').should('have.value', '14454') 

cy.xpath('//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[14]/td[2]/input').click() //click the bill pay button

// Enter the Phone number with alphebetic 

cy.xpath('//*[@id="leftPanel"]/ul/li[4]/a').click() // bill pay link

cy.get('input[name="payee.name"]')
.type('rosy')
cy.wait(1000)
cy.get('input[name="payee.address.street"]')
.type('123 Green Road')
cy.wait(1000)
cy.get('input[name="payee.address.city"]')
.type('Colombo')
cy.wait(1000)
cy.get('input[name="payee.address.state"]')
.type('Western')
cy.wait(1000)
cy.get('input[name="payee.address.zipCode"]')
.type('01000')
cy.wait(1000)
cy.get('input[name="payee.phoneNumber"]')
.type('07ABC10347')
cy.wait(1000)
cy.get('input[name="payee.accountNumber"]')
.type('1111')
cy.wait(1000)
cy.get('input[name="verifyAccount"]')
.type('1111')
cy.wait(1000)
cy.get('input[name="amount"]')
.type('10000')

cy.wait(1000)

cy.get('select[name="fromAccountId"]').select('14454').should('have.value', '14454') 

cy.xpath('//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[14]/td[2]/input').click() //click the bill pay button


  });


});


