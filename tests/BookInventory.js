import BookInventory from '../src/BookInventory';

describe('BookInventory', () => {

    let inventory;
    beforeEach(() => {
        inventory = new BookInventory({
            title: "Do Epic Shit (Hardcover)",
            author: "Ankur Warikoo",
            isbn: "9391165486",
            numCopies: 20
        });
    });

    describe('get availability', () => {

        it('has more than 10 copies', () => {
            expect(inventory.availability).toBe('in stock');
        });

        it('has less than 10 copies', () => {
            inventory.sell(11);
            expect(inventory.availability).toBe('low stock');
        });

        it('is out of stock', () => {
            inventory.sell(20);
            expect(inventory.availability).toBe('out of stock');
        });

    });

    describe('sell()', () => {

        it('sell method exists', () => {
            expect(typeof inventory.sell).toBe('function');
        })

        it('sold mentioned copies', () => {
            inventory.sell(5);
            expect(inventory.numCopies).toBe(15);
        });

        it('sold 1 copy', () => {
            inventory.sell();
            expect(inventory.numCopies).toBe(19);
        });

    });

    describe('restock()', () => {

        it('restock method exists', () => {
            expect(typeof inventory.restock).toBe('function');
        })

        it('restocked mentioned copies', () => {
            inventory.restock(10);
            expect(inventory.numCopies).toBe(30);
        });

        it('restocked 5 copies', () => {
            inventory.restock();
            expect(inventory.numCopies).toBe(25);
        });

    });
  
});
