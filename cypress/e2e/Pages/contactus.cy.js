
export class contactus{


//Verifying contact form submission
verifyContactUs(name, email, body)

{  
    cy.get('.contact > a').click()
    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#phone').type('0998877665')
    cy.get('#message').type('This is an open text area, I can type anything in this')
    cy.get('[colspan="2"] > .button').click()
    cy.get('#rightPanel > :nth-child(2)').should('be.visible')
    cy.get('#rightPanel > :nth-child(3)').should('have.text',body)
}


}