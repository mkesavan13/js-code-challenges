import DinnerMenu from "../src/DinnerMenu";

describe('DinnerMenu', () => {

    let menu;

    beforeEach(() => {
        menu = new DinnerMenu([{
            name: "Paneer Fried Rice",
            isVegetarian: true
        },{
            name: "Gobi Noodles",
            isVegetarian: true
        },{
            name: "Chicken Biriyani",
            isVegetarian: false
        },{
            name: "Mutton Soup",
            isVegetarian: false
        }]);
    });

    describe('getMenu()', () => {

        it('gets all menu items', () => {
            expect(menu.getMenu().length).toBe(4);
        })

        it('gets all vegetarian menu items', () => {
            expect(menu.getMenu({isVegetarian: true}).length).toBe(2);
        })
    })
})