
describe('Login e registro de usuários', () => {
    it('buscar fotos do flavio', () => {
        cy.request({
            method: 'GET',
            url: 'https://alurapic.herokuapp.com/flavio/photos'
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            console.log(res)
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Farol iluminado')
        })
    })
})