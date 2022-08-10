describe('para bank login', function(){


  it('Visit the URL', function(){

    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    
//login

    cy.wait(1000) 

  cy.get('input[name="username"]')  //Usename
    .type('jack')

    cy.wait(1000) 
    
    cy.get('input[name="password"]') // Password 
    .type('jack1')

    cy.xpath('//*[@id="loginPanel"]/form/div[3]/input').click()

    
  //Open a new account
    cy.wait(1000) 
    cy.xpath('//*[@id="leftPanel"]/ul/li[1]/a').click() // open new account
    cy.wait(1000) 
    cy.get('select[id="type"]').select('1').should('have.value', '1') //select Savings
      
    cy.wait(1000)
     
    cy.xpath('//*[@id="rightPanel"]/div/div/form/div/input').click() // open new account button
    cy.wait(1000) 

    cy.xpath('//*[@id="newAccountId"]').click() //click on the new account no

    cy.wait(1000)
     
  //Bill pay      
  
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
    .type('13899')
    cy.wait(1000)
    cy.get('input[name="verifyAccount"]')
    .type('13899')
    cy.wait(1000)
    cy.get('input[name="amount"]')
    .type('10000')

    cy.wait(2000)
   
    cy.get('select[name="fromAccountId"]').select('14010').should('have.value', '14010') // select the bank account no 

    cy.xpath('//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[14]/td[2]/input').click() //click the bill pay button
     
    cy.wait(1000)
    // Find Transaction 

    cy.xpath('  //*[@id="leftPanel"]/ul/li[5]/a').click() // click on the find transaction 

    cy.xpath('  //*[@id="leftPanel"]/ul/li[5]/a').click() // click on the find transaction 

    cy.wait(1000)

    cy.get('select[id="accountId"]').select('14121').should('have.value', '14121') //select the account number
    cy.wait(1000)
    cy.get('input[id="criteria.onDate"]').type('07-20-2022')  // find by date 
    cy.wait(1000)
    cy.xpath('//*[@id="rightPanel"]/div/div/form/div[5]/button').click() // click on the find by date button 

    
    cy.wait(2000)

    cy.visit('https://parabank.parasoft.com/parabank/findtrans.htm')

   

    cy.get('input[id="criteria.fromDate"]').type('07-21-2022')  // find by date range between 
    cy.wait(1000)
    cy.get('input[id="criteria.toDate"]').type('02-03-2022')    // find by date range 
    cy.wait(1000)
    cy.xpath('//*[@id="rightPanel"]/div/div/form/div[7]/button').click()
    cy.wait(1000)
    cy.visit('https://parabank.parasoft.com/parabank/findtrans.htm')
    cy.wait(1000)
    cy.get('input[id="criteria.amount"]').type('10000') // Find by amount 
    cy.wait(1000)
    cy.xpath('//*[@id="rightPanel"]/div/div/form/div[9]/button').click()

    cy.wait(1000)
    // Transfer funds 
    //bug

    cy.xpath('//*[@id="leftPanel"]/ul/li[3]/a').click() // click the transfer funds 
     
    cy.get('input[name="input"]') // Enter amount 
    .type('10000')

    cy.wait(1000)
  
    cy.get('select[id="fromAccountId"]').select(13677).should('have.value', 13677) // select from Account
  
    cy.wait(1000)

   cy.xpath('//*[@id="rightPanel"]/div/div/form/div[2]/input').click() //click on transfer button 

    });



});

