// POJO class for the API testing
export default class CoverPhoto {

    constructor(id, idBook, url) {
        this.id = id;
        this.idBook = idBook;
        this.url = url;
    }

    getId() {
        return this.id;
    }

    getIdBook() {
        return this.idBook;
    }

    getUrl() {
        return this.url;
    }


}