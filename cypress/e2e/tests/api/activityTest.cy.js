// Test suit constants
// -- endpoint url
const endPoint = 'https://fakerestapi.azurewebsites.net/';

// -- constants 
const dataTests = require('../../../fixtures/api/activities.json')

// -- variable
let idsSaved = [];


// ***********************************************
// Test suit
describe('API TESTING - First Section', () => {

    it('GET Activities', () => {

        // API resource for the request
        let resource = 'api/v1/Activities'

        // GET Request
        cy.request({
            method: "GET",
            url: `${endPoint}${resource}`,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {

            // Assert the endpoint response
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(30);

            // Save the ID’s that come in the response body.
            var idsArray = []
            for (var index in response.body) {
                idsArray.push(response.body[index].id)
            }

            // update the Suite varible value
            idsSaved = idsArray;

            cy.log('Loop the ID’s that come in the response body')
            idsArray.forEach(elem => cy.log('id: ' + elem));

        });

    });

    // ********************** LOOP DATA *************************
    // using fixtures data to iterate and execute the tests
    dataTests.forEach(test => {

        it('POST activities', () => {
            // API resource for the request
            let resource = 'api/v1/Activities'

            // POST Request
            cy.request({
                method: 'POST',
                url: `${endPoint}${resource}`,
                headers: { 'Content-Type': 'application/json' },
                body: {
                    "id": test.id,
                    "title": "Activity " + test.id,
                    "dueDate": "2022-08-07",
                    "completed": true
                }
            }).then((response) => {
                // Assert the endpoint response
                expect(response.status).to.eq(200);

                // Print on cypress console the response
                cy.log('Show response values')
                cy.log('id: ' + response.body.id)
                cy.log('title: ' + response.body.title)
            });

        });

    });
    // ********************** END LOOP *************************


    it('GET one Activity', () => {
        // API resource for the request
        let resource = 'api/v1/Activities';

        // Getting random number to use
        let numRandom = randomNum(0, idsSaved.length - 1);
        const idRandom = idsSaved[numRandom]
        cy.log('Random number: ' + numRandom)

        // GET Request
        cy.request({
            method: 'GET',
            url: `${endPoint}${resource}/${idRandom}`,
            headers: { 'Accept-Language': 'en-us', },
        }).then((response) => {

            // Assert the endpoint response
            expect(response.status, 'Status code incorrect').to.eq(200);
            expect(response.body.id, 'Verify if the id is equal to random number').to.eq(idRandom);

            // Print on cypress console the response
            cy.log('Show response values')
            cy.log('id: ' + response.body.id)
            cy.log('title: ' + response.body.title)

        });
    });

    // Generate the random number
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
});