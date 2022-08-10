// Login negative cases 
import loginDemo from '../e2e/1-getting-started/pageobject/loginDemo.cy' // POM 

describe('para bank login negative', function(){

  it('login' ,function (){
  const lp = new loginDemo ()
  lp. Visit()
 
  lp.submit() // login button 


// Without Enter the field 
cy.xpath('//*[@id="loginPanel"]/form/div[3]/input').click() // Click on the loin button 

// Enter Valid Username & Invalid password 

cy.get('input[name="username"]') // Valid Username 
.type('jack')
cy.get('input[name="password"]') // Valid Password 
.type('jack')
cy.xpath('//*[@id="loginPanel"]/form/div[3]/input').click() //Click on the login button 


// Enter invalid Username & Valid password 

cy.get('input[name="username"]') // Valid Username 
.type('jack')
cy.get('input[name="password"]') // Valid Password 
.type('jack1')
cy.xpath('//*[@id="loginPanel"]/form/div[3]/input').click() //Click on the login button 

});
});