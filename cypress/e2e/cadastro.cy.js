/// <reference types="cypress" />

import cadastroPage from "../support/pages/cadastroPage"
import { faker } from '@faker-js/faker';

describe('Cadastro de usuario', () => {

    var nome
    var email
    var password

    // antes de executar todos os testes
    before(() => {
        console.log('Antes de tudo')
    })

    // antes de cada teste
    beforeEach(() => {
        cy.visit('/register')

        nome = faker.person.fullName()
        email = faker.internet.email()
        password = faker.internet.password()
    })

    // depois de todos os testes
    after(() => {
        console.log('depois de tudo')
    })

    // depois de cada
    afterEach(() => {
        console.log('depois de cada teste')
    })

    it('Cadastro com sucesso', () => {
        cadastroPage.cadastrarUsuario(nome, email, password)
        cy.get('#swal2-title').should('have.text', 'Cadastro realizado!')
        cy.get('#swal2-html-container').should('have.text', `Bem-vindo ${nome}`)
    })

    it('Cadastro com nome vazio', () => {
        cadastroPage.cadastrarUsuario(null, email, password)
        cadastroPage.validarLoginErro('O campo nome deve ser prenchido')
    })

    it('Cadastro com email vazio', () => {
        cadastroPage.cadastrarUsuario(nome, null, password)
        cadastroPage.validarLoginErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Cadastro com senha vazia', () => {
        cadastroPage.cadastrarUsuario(nome, email, null)
        cadastroPage.validarLoginErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com tudo vazio', () => {
        cadastroPage.clickEntrar()
        cadastroPage.validarLoginErro('O campo nome deve ser prenchido')
    })

    it('Cadastro com email invalido', () => {
        cadastroPage.cadastrarUsuario(nome, nome, password)
        cadastroPage.validarLoginErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Cadastro com senha invalida', () => {
        cadastroPage.cadastrarUsuario(nome, email, '123')
        cadastroPage.validarLoginErro('O campo senha deve ter pelo menos 6 dígitos')
    })

})
