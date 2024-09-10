import { getZero } from '../getZero';

describe('add zero function', (): void => {
    test('Value less than 0 throws error', () => {
        expect(() => getZero(-1)).toThrow(
            'The number must be no less than 0 and no more than 59',
        );
    });

    test('Value greater than 59 throws error', (): void => {
        expect(() => getZero(60)).toThrow(
            'The number must be no less than 0 and no more than 59',
        );
    });

    test('Lowest value', (): void => {
        expect(getZero(0)).toBe('00');
    });

    test('Highest value', (): void => {
        expect(getZero(9)).toBe('09');
    });

    test('Average value', (): void => {
        expect(getZero(5)).toBe('05');
    });

    test('Should return the passed number in string format', (): void => {
        expect(getZero(10)).toBe('10');
    });

    test('Passing NaN argument.', (): void => {
        expect(() => getZero(NaN)).toThrow(
            'Invalid input: minutes must be a number.',
        );
    });

    test('Passing string argument.', (): void => {
        expect(() => getZero('5' as unknown as number)).toThrow(
            'Invalid input: minutes must be a number.',
        );
    });
});
