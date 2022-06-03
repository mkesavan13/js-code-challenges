import TechnicalBook from '../src/TechnicalBook'

describe('TechnicalBook', () => {

    let inventory;
    beforeEach(() => {
        inventory = new TechnicalBook({
            title: "Do Epic Shit (Hardcover)",
            author: "Ankur Warikoo",
            isbn: "9391165486",
            numCopies: 20,
            edition: "First edition"
        });
    });

    describe('getEdition()', () => {

        it('tells the edition of the book', () => {
            expect(inventory.getEdition()).toBe('The current version of the book is First edition');
        });

    });
  
});
