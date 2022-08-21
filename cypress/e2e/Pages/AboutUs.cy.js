export class aboutus{

verifyAboutUsPage(link)
{
    cy.get('.leftmenu > :nth-child(2) > a').click()
    cy.get('.title').should('be.visible')
    cy.get('#rightPanel > :nth-child(4) > a').should('have.text',link)
}

}