describe('BMI Classification Validation', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:8080/')

    })

    it('TC01 - Underweight BMI', () => {
        //BMI below 18.4kg/m²//
        cy.fillBMIFormAndSubmit('Test', '1.70', '49.13')
        cy.get('#result')
            .should('have.text', 'Test, your BMI is 17kg/m². Your BMI is below recommendations.');
    })

    it('TC02 - Underweight BMI', () => {
        //BMI below 18.4kg/m²//
        cy.fillBMIFormAndSubmit('Test', '1.70', '53.173')
        cy.get('#result')
            .should('have.text', 'Test, your BMI is 18.4kg/m². Your BMI is below recommendations.');
    })
    it('TC01 - Excellent BMI', () => {
        //BMI exactly 18.5 kg/m²//
        cy.fillBMIFormAndSubmit('Test', '1.70', '53.465')
        cy.get('#result')
            .should('have.text', 'Test, your BMI is 18.5kg/m². Your BMI is excellent.');
    })
    it('TC02 -  Excellent BMI', () => {
        //BMI between 18.5kg/m² and 24.9 kg/m²//
        cy.fillBMIFormAndSubmit('Test', '1.70', '57.8')
        cy.get('#result')
            .should('have.text', 'Test, your BMI is 20kg/m². Your BMI is excellent.');
    })
    it('TC03 -  Excellent BMI', () => {
        //BMI exactly 24.9 kg/m²//
        cy.fillBMIFormAndSubmit('Test', '1.70', '71,96')
        cy.get('#result')
            .should('have.text', 'Test, your BMI is 24.9kg/m². Your BMI is excellent.');
    })
    it('TC01 - Overweight BMI', () => {
        //BMI exactly 25kg/m²//
        cy.fillBMIFormAndSubmit('Test', '1.70', '72.25')
        cy.get('#result')
            .should('have.text', 'Test, your BMI is 25kg/m². According to your BMI, you are overweight.');
    })
    it('TC02 -  Overweight BMI', () => {
        //BMI between 25kg/m² and 29.9kg/m²//
        cy.fillBMIFormAndSubmit('Test', '1.70', '75.14')
        cy.get('#result')
            .should('have.text', 'Test, your BMI is 26kg/m². According to your BMI, you are overweight.');
    })
    it('TC03 -  Overweight BMI', () => {
        //BMI exactly 29.9 kg/m²  //
        cy.fillBMIFormAndSubmit('Test', '1.70', '86.41')
        cy.get('#result')
            .should('have.text', 'Test, your BMI is 29.9kg/m². According to your BMI, you are overweight.');
    })
    it('TC01 - Obesity BMI', () => {
        //BMI exactly 30kg/m²//
        cy.fillBMIFormAndSubmit('Test', '1.70', '86.7')
        cy.get('#result')
            .should('have.text', 'Test, your BMI is 30kg/m². According to your BMI, you are obese.');
    })
    it('TC02 - Obesity BMI', () => {
        //BMI bBMI greater than 30kg/m²//
        cy.fillBMIFormAndSubmit('Test', '1.70', '144.5')
        cy.get('#result')
            .should('have.text', 'Test, your BMI is 50kg/m². According to your BMI, you are obese.');
    })


})
