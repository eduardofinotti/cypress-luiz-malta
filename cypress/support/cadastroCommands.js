Cypress.Commands.add('preencherNome', (nome) => {
    cy.get('#user').type(nome)
})

Cypress.Commands.add('preencherEmail', (email) => {
    cy.get('#email').type(email)
})

Cypress.Commands.add('preencherSenha', (senha) => {
    cy.get('#password').type(senha)
})

Cypress.Commands.add('clickEntrar', () => {
    cy.get('#btnRegister').click()
})

Cypress.Commands.add('validarLoginErro', (mensagem) => {
    cy.get('#errorMessageFirstName')
        .should('have.text', mensagem)
})

Cypress.Commands.add('cadastrarUsuario', (nome, email, senha) => {

    if (nome) {
        cy.preencherNome(nome)
    }

    if (email) {
        cy.preencherEmail(email)
    }

    if (senha) {
        cy.preencherSenha(senha)
    }

    cy.clickEntrar()
})


// // comandas login
// Cypress.Commands.add('fazerLogin', (mensagem) => {
//     cy.preecnherEmail()
//     cy.precchersenha()
//     cy.entrar()
// })

// Cypress.Commands.add('acessarOrders', (mensagem) => {
//     cy.fazerLogin()
//     cy.clicarOrders()
// })



