
/// <reference types = 'cypress' />
describe('SeleniumEasy', () => {

    it('Ensure user can access the url', () => {
        cy.visit('https://www.seleniumeasy.com/')
    })

    it('Ensures user can click on Table menu and then sort and search', () => {
        cy.wait(3000);
        cy.get('#at-cv-lightbox-close').click()

        cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(4) > a').click()

        // cy.on('window:alert',(Text), () => {
        //     expect(txt).to.contains('Learn selenium')
        // })
    })

    it('Ensures user can filter details', () => {

        cy.get('input').type('65')
    })

})