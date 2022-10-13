import CoverPhoto from "../../classes/api/CoverPhoto";

// Test suit constants
// -- endpoint url
const endPoint = 'https://fakerestapi.azurewebsites.net/';


// ***********************************************
// Test suit
describe('API TESTING - Third Section', () => { 

    it('GET Activities', () => {

        // API resource for the request
        let resource = 'api/v1/CoverPhotos';

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

            let coverPhotoArr = [];

            // Saving the response in an array of CoverPhoto objects
            response.body.forEach(elem => {
                coverPhotoArr.push(Object.assign(new CoverPhoto(), elem));
            });


            cy.log('--- Printing the response ---')
            coverPhotoArr.forEach(item => {
                // cy.log('Id: '+item.getId());
                cy.log('IdBook: '+item.getIdBook());
                cy.log('Url: '+item.getUrl());
                cy.log('---------------------------');
                
            });

        });

    }); 
     
});