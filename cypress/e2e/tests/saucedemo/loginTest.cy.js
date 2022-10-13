import loginSaucePage from '../../pages/saucedemo/loginSaucePage';

// Test suit constants
// -- URLs used
const login_url = 'https://www.saucedemo.com';
// -- constants 
const usersData = require('../../../fixtures/saucedemo/sauceUsers.json');


// -- functions
function login(user, pss) {
    loginSaucePage.typeUsername(user);
    loginSaucePage.typePassword(pss);
    loginSaucePage.loginBtnClick();
};

// ***********************************************
// Test suit
describe('Validate the Login', () => {

    usersData.forEach(userTest => {

        it(userTest.test_name, () => {
            cy.visit(login_url);
            login(userTest.username, userTest.password);

            if (userTest.name != 'Standard_user') {
                loginSaucePage.elements.errorMessage()
                    .should('be.visible')
                    .contains(userTest.error_message);
            }

            cy.url().should('eq', userTest.expected_url);

        });

    });
});

// ***********************************************


