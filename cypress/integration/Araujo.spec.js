context('DesafioAraujo', () => {


    before(() => {
        cy.visit('https://www.araujo.com.br/')  //Abrindo o site antes de executar o primeiro teste                                                           // timeout devido um grande número de requisições.
      })


    it('Adicionar produto no carrinho', () => {    //Criando o primeiro teste -> Selecionar produto

        cy.get('[href="https://www.araujo.com.br/medicamentos"]') //Localizando opção medicmaentos através do atributo 
        .click() //Clicando na opção pagamentos
        
        // a partir desse momento o Cypres devolveu um erro originário da aplicação e falhou o teste.
        // devido a falta de prática com a ferramente, naoa consegui contornar o erro, e prosseguir com o fluxo de testes 
        // até chegar no carrinho de compras


        cy.get('[alt="07891317127725"]').click();//tentativa de clicar na img de um dos remedios da pagina, mas sem sucesso


        })
    });
