/// <reference types = "cypress" />

describe('Alert & Modals Test', () => {
    it('Ensure user can access Selenium Easy', () => {
        cy.visit('https://www.seleniumeasy.com/test/')
    })
    it('Ensure user can check Input Form', () => {
        cy.contains('Learn selenium to automate with Seleniumeasy.com').should('be.visible')
        cy.get('.at-cm-no-button').click()
        
    })
})