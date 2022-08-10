//Forgot info page positive cases

import loginDemo from '../e2e/1-getting-started/pageobject/loginDemo.cy' // POM 

it('login' ,function (){

    const lp = new loginDemo ()
    lp. Visit()


// Find Info 
cy.xpath('//*[@id="loginPanel"]/p[1]/a').click() // click the forgot info link 

cy.get('input[name="firstName"]') 
.type('amanda')
cy.get('input[name="lastName"]') 
.type('jesudasan')
cy.get('input[name="address.street"]') 
.type('161 gw road t')
cy.get('input[name="address.city"]') 
.type('trincomalee')
cy.get('input[name="address.state"]') 
.type('eastern')
cy.get('input[name="address.zipCode"]') 
.type('31000')
cy.get('input[name="ssn"]') 
.type('147')
cy.xpath('//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input').click() // find my login info button 

  });



