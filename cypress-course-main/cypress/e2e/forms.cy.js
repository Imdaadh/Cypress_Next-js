describe('form testing',()=>{

        beforeEach(()=>{
            cy.visit('/forms')
        })


        it('Forms Subcribe Testing', ()=>{
            cy.contains(/testing forms/i)

            //Using Alias
            // cy.getDataTest('subscribe-form').find('input').type('imd@gmail.com')
            cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
            cy.get('@subscribe-input').type('imd@coderyan.com')
            cy.contains(/Successfully subbed: imd@coderyan.com!/i).should('not.exist')
            cy.getDataTest('subscribe-button').click()
            cy.contains(/Successfully subbed: imd@coderyan.com!/i).should('exist')
            cy.wait(3000)
            cy.contains(/Successfully subbed: imd@coderyan.com!/i).should('not.exist')
    
            cy.get('@subscribe-input').type('imd@coderyan.io')
            cy.contains(/invalid email: imd@coderyan.io!/i).should('not.exist')
            cy.getDataTest('subscribe-button').click()
            cy.contains(/invalid email: imd@coderyan.io!/i).should('exist')
            cy.wait(3000)
            cy.contains(/invalid email: imd@coderyan.io!/i).should('not.exist')
    
            cy.contains(/fail!/i).should('not.exist')
            cy.getDataTest('subscribe-button').click()
            cy.contains(/fail!/i).should('exist')

        })


})