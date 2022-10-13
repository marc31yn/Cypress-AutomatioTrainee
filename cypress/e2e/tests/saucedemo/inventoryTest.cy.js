import inventoryPage from "../../pages/saucedemo/inventoryPage";
import cartPage from "../../pages/saucedemo/cartPage";
import checkoutPage from "../../pages/saucedemo/checkoutPage";

// Test suit constants
// -- URLs used
const login_url = 'https://www.saucedemo.com';
const inventory_url = 'https://www.saucedemo.com/inventory.html';
const cart_url = 'https://www.saucedemo.com/cart.html';
const checkout_step_one_url = 'https://www.saucedemo.com/checkout-step-one.html';
const about_url = 'https://saucelabs.com/';

// --  constants 
const productsArr = ["Sauce Labs Backpack", "Sauce Labs Bike Light", "Sauce Labs Bolt T-Shirt", "Sauce Labs Onesie"];

// -- functions
function transform(labelProduct) {
    var lower = labelProduct.toLowerCase();
    return lower.replace(/ /g, "-");
};

function addProducts(productList) {

    cy.log('Loop products');
    productList.forEach(prod => {
        cy.log(prod)
        inventoryPage.addProduct(transform(prod));
    });

}

// ***********************************************
// Test suit
describe('TestSuite-UI', () => {

    beforeEach(function () {
        // cy.visit(login_url);

        cy.fixture('saucedemo/sauceCredentials')
            .then(credentials => {
                this.credentials = credentials;
            });

        cy.fixture('saucedemo/checkoutData')
            .then(userCheckout => {
                this.userCheckout = userCheckout;
            });

    });

    describe('Validate the saucedemo page actions', () => {

        beforeEach(function () {
            cy.visit(login_url);
            cy.loginSauceDemo(this.credentials.standarUser, this.credentials.systemPss);
            cy.url().should('eq', inventory_url, 'Verify the inventory url');
        });

        it('Add and remove items on the cart', function () {

            addProducts(productsArr);

            inventoryPage.elements.cartBadge().then(function ($elem) {
                expect($elem.text(), 'Check the ammount of products added on the cart').to.eq('4');
            });

            inventoryPage.cartIconClick();
            cy.url().should('eq', cart_url, 'Verify the cart url');

            cy.log('Print value from productsArr');
            cy.log(productsArr[1])

            cartPage.removeProduct(transform(productsArr[0]));
            cartPage.removeProduct(transform(productsArr[1]));

            inventoryPage.elements.cartBadge().then(function ($elem) {
                expect($elem.text(), 'Check the ammount of products on the cart').to.eq('2');
            });

        });

        it('Verify the checkout', function () {

            addProducts(productsArr);

            inventoryPage.elements.cartBadge().then(function ($elem) {
                expect($elem.text(), 'Check the ammount of products added on the cart').to.eq('4');
            });

            inventoryPage.cartIconClick();
            cy.url().should('eq', cart_url, 'Verify the cart url');

            cartPage.checkoutBtnClick();
            cy.url().should('eq', checkout_step_one_url, 'Verify the checkout step one url');

            checkoutPage.fillForm(
                this.userCheckout.first_name,
                this.userCheckout.last_name,
                this.userCheckout.code_postal
            );

            checkoutPage.continueBtnClick();

            inventoryPage.elements.cartBadge().then(function ($elem) {
                expect($elem.text(), 'Check the ammount of products added on the cart').to.eq('4');
            });

            checkoutPage.finishBtnClick();

            checkoutPage.elements.checkoutTitle().should('have.text', 'Checkout: Complete!');

        });

        it('Verify the About Page', function () {

            inventoryPage.menuBtnClick();

            inventoryPage.elements.aboutBtn().should('be.visible');
            inventoryPage.aboutBtnClick();

            cy.url().should('eq', about_url, 'Verify the About url');
            cy.visit(login_url);

        });

    })

    describe('Verify the social network', () => {

        beforeEach(function () {
            cy.visit(login_url);
            cy.loginSauceDemo(this.credentials.standarUser, this.credentials.systemPss);
            cy.url().should('eq', inventory_url, 'Verify the inventory url');
        });

        it('Verify twitter', function () {
            inventoryPage.twIconClick();
            cy.url().should('include', 'twitter.com/saucelabs');
        });

        it('Verify facebook', function () {
            inventoryPage.fbIconClick();
            cy.url().should('include', 'facebook.com/saucelabs');
        });

        it('Verify linkedin', function () {
            inventoryPage.lkdIconClick();
            cy.url().should('include', 'linkedin')

        });


    })

});
// ***********************************************