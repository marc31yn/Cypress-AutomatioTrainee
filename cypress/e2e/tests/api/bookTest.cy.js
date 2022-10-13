import Ajv from "ajv";

// Test suit constants
// -- endpoint url
const endPoint = 'https://fakerestapi.azurewebsites.net/';

// -- constants 
const ajv = new Ajv();

// ***********************************************
// Test suit
describe('API TESTING - Second Section', () => {

    /*
    // This validates that each response json object 
    // has the indicated keys, it is a way to validate the schema
    // NOTE: It is skip because it consumes a lot of time 
    // because it iterates all the objects of the response
    */
    it('Get books - Schema validation', () => {

        // API resource for the request
        let resource = 'api/v1/Books';

        // GET Request
        cy.request({
            method: 'GET',
            url: `${endPoint}${resource}`,
            headers: {
                'Content-Type': 'application/json'
            }
        }).as('bookReq');

        // Assert the endpoint response

        // using cypress alias
        cy.get('@bookReq')
            .its('status')
            .should('eq', 200);

        // Validate the schema base on json keys name
        cy.get('@bookReq')
            .its('body')
            .each(object => {
                expect(object).to.have.all.keys('id', 'title', 'description', 'pageCount', 'excerpt', 'publishDate');
            });

    });

    // Validates the JSON response schema with Ajv 
    it('Schema validation with AJV', () => {

        // API resource for the request
        let resource = 'api/v1/Books';

        // GET Request
        cy.request(`${endPoint}${resource}`).as('bookApi');


        // using cypress alias
        cy.get('@bookApi')
            .then((response) => {

                // Assert the endpoint response
                expect(response.status).to.eq(200);

                // Validate the Schema with AJV            
                cy.fixture("api/schemaBooks").then((bookSchema) => {

                    cy.log('validate schema function');
                    const validate = ajv.compile(bookSchema)
                    const valid = validate(response.body)

                    if (valid) cy.log("Success JSON Schema validation")
                    else cy.log("Failed JSON Schema validation" + validate.errors)

                    expect(valid, 'Verify the schema').to.be.true;

                });

            });

        cy.get('@bookApi').then((response) => {
            // Prints the headers on cypress log
            cy.log('--- The headers ---')
            let arr = Object.keys(response.headers);

            // Loop and print on cypress log the headers
            arr.forEach((val) => {
                cy.log(`${val}: ${response.headers[val]} `);
            })

        });

    });

});