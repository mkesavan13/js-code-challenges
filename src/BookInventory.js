// Inventory application for book store
// create book with title, author, isbn, numCopies
// getAvailability => no book out of stock, < 10 low stock & in stock otherwise
// sell(numSold = 1) if no numSold, sold is one
// restock(numCopies = 5)

/**
 * Represents a book
 * @constructor
*/
export default class BookInventory{
    constructor({title, author, isbn, numCopies}){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.numCopies = numCopies;
    }

    get availability(){
        return this.getAvailability();
    }

    /**
     * Method to know the book availability
     * 0 copies - 'out of stock'
     * less than 10 copies - 'low stock'
     * more than 10 copies - 'in stock'
     * returns string that represents number of copies available
    */
    getAvailability(){
        let numCopies = this.numCopies;
        if(numCopies === 0){
            return 'out of stock';
        }
        else if(numCopies < 10){
            return 'low stock';
        }
        else{
            return 'in stock';
        }
    }

    /**
     * Method to sell the book
     * @param numSold - integer of number of copies sold, default to 1
     * returns undefined
    */
    sell(numSold = 1){
        this.numCopies -= numSold;
    }

    /**
     * Method to restock the book
     * @param numCopies - integer of number of copies restocked, default to 5
     * returns undefined
    */
    restock(numCopies = 5){
        this.numCopies += numCopies;
    }
}
