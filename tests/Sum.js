import Sum from '../src/Sum';

describe('Sum', () => {

    describe('sum(num1,num2)', () => {

        it('returns appropriate sum', () => {
            expect(Sum(1,2)).toBe(3);
        });

    });
  
});
