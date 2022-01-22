/// <reference types = "cypress" />

describe('Alert & Modals Test', () => {
    it('Ensure user can access Selenium Easy', () => {
        cy.visit('https://www.seleniumeasy.com/test/')
    })
    it('Ensure user can check Input Form', () => {
        cy.contains('Learn selenium to automate with Seleniumeasy.com').should('be.visible')
        cy.get('.at-cm-no-button').click()
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click()
        cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Checkbox Demo').click()
    })
    it('Ensure user can click checkbox for single checkbox demo', () => {
        cy.get('#isAgeSelected').click()
        cy.get('#txtAge').contains('Success')
        cy.get('#isAgeSelected').click()
    })
    it('Ensure user can click checkbox for multiple checkbox demo', () => {
        cy.get('#check1').click()
        cy.get('#check1').click()
        cy.get(':nth-child(4) > label').click()
    })
})