/// <reference types="cypress" />

describe('Comandos basicos', () => {

    it('Acessar URL', () => {
        cy.visit('https://automationpratice.com.br/register')
    })

    // Encontra com elemento - get()
    it('Encontrar elemento - GET', () => {
        cy.visit('https://automationpratice.com.br')
        cy.get('.fa-user')
    })

    // Encontra um elemento
    // Precisamos diminuir o escopo com get
    it('Encontrar elemento - FIND', () => {
        cy.visit('https://automationpratice.com.br')
        cy.get('.right_list_fix').find('.fa-user')
    })

    // Encontra um elemento pelo texto!
    // Geralemnte precisamos diminuir o escopo
    it('Encontrar elemento - Contains', () => {
        cy.visit('https://automationpratice.com.br')
        cy.get('.right_list_fix').contains('Login')
    })

    it('Click', () => {
        cy.visit('https://automationpratice.com.br')

        cy.get('.right_list_fix')
            .contains('Login')
            .click()
    })

    it('Duplo Click', () => {
        cy.visit('https://automationpratice.com.br')
        cy.get('.fa-user').dblclick()
    })

    it('Right Click', () => {
        cy.visit('https://automationpratice.com.br')
        cy.get('.fa-user').rightclick()
    })

    it('Preencher um campo', () => {
        cy.visit('https://automationpratice.com.br')
        cy.get('.form-control').type('email@gmail.com')
    })

    it('Preencher um campo e dar enter', () => {
        cy.visit('https://automationpratice.com.br')
        cy.get('.form-control').type('email@gmail.com{enter}')
    })

    it('Select', () => {
        cy.visit('https://automationpratice.com.br/checkout-one')
        cy.get('#country').select('usa')
        // cy.get('#country').select(2)
    })

    it('Checkbox', () => {
        cy.visit('https://automationpratice.com.br/checkout-one')
        cy.get('#materialUnchecked').check()
        cy.get('#materialUnchecked').uncheck()
    })

    it('Radio', () => {
        cy.visit('https://automationpratice.com.br/checkout-one')
        cy.get('#css').uncheck()
    })

    it.only('Assert', () => {
        cy.visit('https://automationpratice.com.br')
        cy.get('.form-control').type('email@gmail.com{enter}')
        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', 'Thank you for your Subscribtion')
    })

})