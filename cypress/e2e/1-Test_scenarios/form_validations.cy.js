describe('Validation Form', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:8080/')

    })

    it('TC01 -Enter weight with comma', () => {
        cy.fillBMIFormAndSubmit('Test', '1,70', '52')
        cy.get('#result')
            .should('have.text', 'Test, your BMI is 17.99kg/m². Your BMI is below recommendations.');
    })

    it('TC02 - Enter weight with non-numeric characters', () => {
        cy.fillBMIFormAndSubmit('Test', '1.70', '1abc')
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Invalid weight, enter your weight again!`)


        })
    })
    it('TC03 -Enter weight greater than 300', () => {
        cy.fillBMIFormAndSubmit('Test', '1.70', '1000')
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Invalid weight, enter your weight again!`)

        })
    })

    it('TC04 - Enter weight less than 10', () => {
        cy.fillBMIFormAndSubmit('Test', '1.70', '9')
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Invalid weight, enter your weight again!`)
        })
    })

    it('TC05 -Enter a negative value for weight', () => {
        cy.fillBMIFormAndSubmit('Test', '1.70', '-60')
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Invalid weight, enter your weight again!`)
        })
    })

    it('TC06 - Enter height with comma', () => {
        cy.fillBMIFormAndSubmit('Test', '1,70', '52')
        cy.get('#result')
            .should('have.text', 'Test, your BMI is 17.99kg/m². Your BMI is below recommendations.');
    })

    it('TC07 -Enter height greater or equal to 3 meters', () => {
        cy.fillBMIFormAndSubmit('Test', '3', '52')
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Invalid height, enter your height again!`)
        })
    })

    it('TC08 - Enter height less than 1', () => {
        cy.fillBMIFormAndSubmit('Test', '0.9', '52')
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Invalid height, enter your height again!`)
        })
    })

    it('TC09 - Enter height with non-numeric characters', () => {
        cy.fillBMIFormAndSubmit('Test', '1abc', '52')
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Invalid height, enter your height again!`)
        })
    })

    it('TC10 - Enter a negative value for height', () => {
        cy.fillBMIFormAndSubmit('Test', '-60', '52')
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Invalid height, enter your height again!`)
        })
    })

    it('TC11 - Blank fields', () => {
        cy.fillBMIFormAndSubmit('Test', '', '')
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Invalid height, enter your height again!`)
        })
    })
})

