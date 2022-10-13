class checkoutPage {

    elements = {
        continueBtn: () => cy.get('[data-test="continue"]'),
        firstName_txt: () => cy.get('[data-test="firstName"]'),
        lastName_txt: () => cy.get('[data-test="lastName"]'),
        postalCode_txt: () => cy.get('[data-test="postalCode"]'),
        finishBtn: () => cy.get('[data-test="finish"]'),
        checkoutTitle: () => cy.get('.title')

    }

    fillForm(firstName, lastName, postalCode) {
        this.elements.firstName_txt().type(firstName);
        this.elements.lastName_txt().type(lastName);
        this.elements.postalCode_txt().type(postalCode);
    }

    continueBtnClick() {
        this.elements.continueBtn().click();
    }

    finishBtnClick() {
        this.elements.finishBtn().click();
    }

}

module.exports = new checkoutPage();