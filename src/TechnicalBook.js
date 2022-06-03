import BookInventory from "./BookInventory";

/**
 * Represents a book
 * @constructor
*/
export default class TechnicalBook extends BookInventory{
    constructor({title, author, isbn, numCopies, edition}){
        super({title, author, isbn, numCopies});
        this.edition = edition;
    }

    /**
     * Method to know the book edition
     * returns string that represents book edition
    */
    getEdition(){
        return `The current version of the book is ${this.edition}`;
    }

}
