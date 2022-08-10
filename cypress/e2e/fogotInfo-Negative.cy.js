 // forgot info page negative cases 

import loginDemo from '../e2e/1-getting-started/pageobject/loginDemo.cy' // POM 

it('login' ,function (){

    const lp = new loginDemo ()
    lp. Visit()

 
 
cy.xpath('//*[@id="loginPanel"]/p[1]/a').click() // click the forgot info link 

//Without Enter feild and click on the find my login info 
cy.xpath('//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input').click() // click the find my login info 


  
  
  });



