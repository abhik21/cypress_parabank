export class homepage{

    navigate()   //Navigate to the home page for Para Bank
    {
        cy.visit('https://parabank.parasoft.com/')
     
    }
    verifyMenuLinks() //Verify menu links present on homepage
    {
        //Verifying top left mentu links
        cy.get('.Solutions').should('be.visible')
        cy.get('.leftmenu > :nth-child(2) > a').should('be.visible')
        cy.get('.leftmenu > :nth-child(3) > a').should('be.visible')
        cy.get('.leftmenu > :nth-child(4) > a').should('be.visible')
        cy.get('.leftmenu > :nth-child(5) > a').should('be.visible')
        cy.get('.leftmenu > :nth-child(6) > a').should('be.visible') 


        //Verifying Icon menus at top right 
        cy.get('.home > a').should('be.visible')
        cy.get('.aboutus > a').should('be.visible')
        cy.get('.contact > a').should('be.visible')

    }
 

    login()
    {

        //Login to the application as admin
        cy.get('.contact > a').type('admin')
        cy.get(':nth-child(4) > .input').type('admin')
        cy.get(':nth-child(5) > .button').click()
    }
    
    verifyFooter()
    {
        //Verify footer links
        cy.get('#footerPanel').should('be.visible')
        cy.get('.visit > :nth-child(2) > a').should('have.text','www.parasoft.com')
    }


}