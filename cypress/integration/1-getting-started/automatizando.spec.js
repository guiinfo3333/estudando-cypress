
describe('Login e registro de usuários', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('Verificar mensagens de validação', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible') //indica que ele precisa esta visivel
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
    })

    it('Verificar mensagens de email inválido', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="email"]').type('jacqueline')
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible') //indica que ele precisa esta visivel
    })

    it('Verificar senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="password"]').type('123')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible') //indica que ele precisa esta visivel
    })

    it.only('faze login de usuário válido', () => {
        cy.login('flavio', '123')
        cy.contains('a', '(Logout)').should('be.visible')
    })

    it.only('fazer login de usuário inválido', () => {
        cy.login('guilherme', '1234')
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Invalid user name or password")
        })
    })
})