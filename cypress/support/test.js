Cypress.Commands.add('fillBMIFormAndSubmit', (name, height, weight) => {
    cy.get('#ipt_name').type(name);
    if (height != '') {
        cy.get('#ipt_height').type(height);
    }
    if (weight != '') {
        cy.get('#ipt_weight').type(weight);
    }
    cy.get('[type="button"]').click();

})
