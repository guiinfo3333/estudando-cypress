describe('alura busca cursos', () => {
    beforeEach(() => {
        cy.visit('https://www.alura.com.br/')
    })

    it('buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('phyton')
        cy.get('.header-barraBusca-form-submit').click()
        cy.get('h4.busca-resultado-nome')
            // .should('have.text', 'Formação Python')  se tem esse texto
            .should('contain', 'Formação Python')
    })
})