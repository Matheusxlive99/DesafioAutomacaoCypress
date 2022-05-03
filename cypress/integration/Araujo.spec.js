context('DesafioAraujo', () => {

    before(() => {

        cy.visit('https://www.araujo.com.br/')       

      })

    it('Adicionar produto no carrinho', () => {   

        cy.get('[href="https://www.araujo.com.br/medicamentos"]') .click() 
        cy.get('[alt="07891317127725"]').click()

        })
    });
