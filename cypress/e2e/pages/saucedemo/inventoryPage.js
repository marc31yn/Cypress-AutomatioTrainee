class inventoryPage {

    elements = {
        titleSpan: () => cy.get('.title'),
        products: () => cy.get('button:contains("Add to cart")'),
        cartIcon: () => cy.get('.shopping_cart_link'),
        cartBadge: () => cy.get('.shopping_cart_badge'),
        menuBtn: () => cy.get('#react-burger-menu-btn'),
        aboutBtn: () => cy.get('#about_sidebar_link'),
        twitterIcon: () => cy.get('.social_twitter > a'),
        facebookIcon: () => cy.get('.social_facebook > a'),
        linkedin: () => cy.get('.social_linkedin > a')
    }

    addProduct(nameProduct) {
        cy.get('[data-test="add-to-cart-' + nameProduct + '"]').click();
    }

    cartIconClick() {
        this.elements.cartIcon().click();
    }

    menuBtnClick() {
        this.elements.menuBtn().click();
    }

    aboutBtnClick() {
        this.elements.aboutBtn().click();
    }

    fbIconClick() {
        this.elements.facebookIcon().invoke('removeAttr', 'target').click();
    }

    twIconClick() {
        this.elements.twitterIcon().invoke('removeAttr', 'target').click();
    }

    lkdIconClick() {
        this.elements.linkedin().invoke('removeAttr', 'target').click();
    }

}

module.exports = new inventoryPage();