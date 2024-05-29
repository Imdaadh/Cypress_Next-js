describe('Fundamental Test', () => {

  //Callback
  beforeEach(()=>{cy.visit('/fundamentals')}) 

  it('Containes correct H1 Text', () => {

    //Using the callback function
    cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals')


    cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i) //Case sensitive 
    cy.get('[data-test="fundamentals-header"]').should('contain.text' ,'Testing Fundamentals') //added a data-test type
  })

   //it.only plays only this test
  it('Accordion Works Correctly', () => {
    // cy.visit('/fundamentals')

    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.wait(2000);

    //First clicking the Accordion
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    //This text should contain
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    //Closing the button 
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')

    //Positive testcase these 
    cy.wait(2000);
    cy.get('[data-test="accordion-item-1"] .MuiAccordionSummary-content p.MuiTypography-body1').should('have.text', 'Fundamental 1) Describe blocks');
    cy.get('[data-test="accordion-item-2"] .MuiAccordionSummary-content p.MuiTypography-body1').should('have.text', 'Fundamental 2) It blocks');

    //negative testcase 
    cy.get('[data-test="accordion-item-3"] .MuiAccordionSummary-content p.MuiTypography-body1').should('not.have.text', 'Fundamental 2) It blocks');

  })

})