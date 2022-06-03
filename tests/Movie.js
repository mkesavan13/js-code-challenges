import Movie from "../src/Movie";

describe('Movie', () => {

    let kgf2;

    beforeEach(() => {
        kgf2 = new Movie({
            title: 'KGF 2',
            director: 'Prashanth Neel',
            genre: 'Action',
            releaseYear: '2022',
            rating: '4.7'
        })
    });

    describe('getOverview()', () => {

        it('matches kgf2 overview', () => {
            expect(kgf2.getOverview()).toBe(`KGF 2, a Action film directed by Prashanth Neel was released in 2022. It received a rating of 4.7.`);
        })
    })
})