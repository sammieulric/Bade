/// <reference types = "cypress" />

describe('Alert & Modals Test', () => {
    it('Ensure user can access Selenium Easy', () => {
        cy.visit('https://www.seleniumeasy.com/test/')
    })
    it('Ensure user can verify Alert and Modals', () => {
        cy.contains('Learn selenium to automate with Seleniumeasy.com').should('be.visible')
        cy.get('.at-cm-no-button').click()
        cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Bootstrap Modals').click()
    })
    it('Ensure user can verify single modal', () => {
        cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle="modal"]')
        .contains('Launch modal')
        .click()
        cy.contains('Modal Title').should('be.visible')
        cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        .contains('Save changes')
        .click()
    })
    it('Ensure user can verify multiple modal', () => {
        cy.get('[href="#myModal"]').contains('Launch modal').click()
        cy.get('.modal-body > .btn').contains('Launch modal').click()
        cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        .contains('Save changes')
        .click()
    })

})