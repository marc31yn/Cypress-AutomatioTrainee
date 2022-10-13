class cartPage {

    elements = {

        checkoutBtn: () => cy.get('[data-test="checkout"]'),

    }

    removeProduct(nameProduct) {
        cy.get('[data-test="remove-' + nameProduct + '"]').click();
    }

    checkoutBtnClick() {
        this.elements.checkoutBtn().click();
    }

}

module.exports = new cartPage();