export default {

    preencherNome(nome) {
        cy.get('#user').type(nome)
    },

    preencherEmail(email) {
        cy.get('#email').type(email)
    },

    preencherSenha(senha) {
        cy.get('#password').type(senha)
    },

    clickEntrar() {
        cy.get('#btnRegister').click()
    },

    validarLoginErro(mensagem) {
        cy.get('#errorMessageFirstName')
            .should('have.text', mensagem)
    },

    cadastrarUsuario(nome, email, senha) {

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
    }
}