import { countDecimals, commonMulti, actions } from './Math';

describe('Math', () => {
    describe('countDecimals', () => {
        it('properly calculates decimals for float', () => {
            expect(countDecimals('2.2')).toEqual(1);
            expect(countDecimals('2.001')).toEqual(3);
            expect(countDecimals('2.0000000000000000000001')).toEqual(22);
        });
        it('returns 0 for float', () => {
            expect(countDecimals('0')).toEqual(0);
            expect(countDecimals('1')).toEqual(0);
            expect(countDecimals('1000000001')).toEqual(0);
        });
    });

    describe('commonMulti', () => {
        it('finds common multiplication for two float numbers to make them an integer', () => {
            expect(commonMulti(0.01, 0.001).multi).toEqual(1000);
            expect(commonMulti(0.1, 0.2).multi).toEqual(10);
            expect(commonMulti(2, 0.01).multi).toEqual(100);
        });
        it('properly multiplies elements', () => {
            const multi = commonMulti(0.001, 0.0001);
            expect(multi.multiA).toEqual(10);
            expect(multi.multiB).toEqual(1);
            const multi2 = commonMulti(2, 0.01);
            expect(multi2.multiA).toEqual(200);
            expect(multi2.multiB).toEqual(1);
        });
    });

    describe('Actions', () => {
        it('sum', () => {
            expect(actions.sum(0.1, 0.2)).toEqual(0.3);
            expect(actions.sum(1, 2)).toEqual(3);
            // we also should have proper results for action containing other results
            expect(actions.sum(2/3, 1)).toEqual(1.6666666666666665);
        });
        it('subtract', () => {
            expect(actions.subtract(0.2, 0.1)).toEqual(0.1);
            expect(actions.subtract(2, 1)).toEqual(1);
            // we also should have proper results for action containing other results
            expect(actions.subtract(1, 2/3)).toEqual(0.3333333333333334);
        });
        it('multiply', () => {
            expect(actions.multiply(5, 0)).toEqual(0);
            expect(actions.multiply(2, 1)).toEqual(2);
            expect(actions.multiply(2, 2/3)).toEqual(1.3333333333333333);
            expect(actions.multiply(3, 2/3)).toEqual(2);
            expect(actions.multiply(5, 3)).toEqual(15);
        });

        it('divide', () => {
            expect(actions.divide(5, 0)).toEqual('Not a Number');
            expect(actions.divide(5, 1)).toEqual(5);
            expect(actions.divide(10, 3)).toEqual(3.3333333333333335);
        });

        it('percent', () => {
            expect(actions.perCent(0, 2)).toEqual(0.02);
            expect(actions.perCent(0, 0.1)).toEqual(0.001);
        });
        it('negate', () => {
            expect(actions.negate(123, 0)).toEqual(-123);
            expect(actions.negate(0.1, 0)).toEqual(-0.1);
        });
    });
});

