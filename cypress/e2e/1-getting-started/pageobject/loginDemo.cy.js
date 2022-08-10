/// <reference types= "cypress"/>
class loginDemo{

    Visit(){
    
      cy.visit("https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC")
    
    }
    
    FillLUsename (value) {
    
    const field=cy.get('input[name="username"]') // Enter the Username 
    field.clear()
    field.type(value)
    return this
    
    }
    
    FillPassword (value) {     // Enter the password 
    
      const field=cy.get('input[name="password"]')
      field.clear()
      field.type(value)
     return this   
      
    }
    
    submit() // login button 
    {
    const button=cy.xpath('//*[@id="loginPanel"]/form/div[3]/input')
    button.click() 
    
    }

    }
    
    export default loginDemo
    