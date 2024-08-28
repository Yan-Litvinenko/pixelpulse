import { getZero } from '../utils/getZero';

describe('add zero function', () => {
    test('Value less than 0 throws error', () => {
        expect(() => getZero(-1)).toThrow('The number must be no less than 0 and no more than 59');
    });

    test('Value greater than 59 throws error', () => {
        expect(() => getZero(60)).toThrow('The number must be no less than 0 and no more than 59');
    });

    test('Lowest value', () => {
        expect(getZero(0)).toBe('00');
    });

    test('Highest value', () => {
        expect(getZero(9)).toBe('09');
    });

    test('Average value', () => {
        expect(getZero(5)).toBe('05');
    });

    test('Should return the passed number in string format', () => {
        expect(getZero(10)).toBe('10');
    });

    test('Passing NaN argument.', () => {
        expect(() => getZero(NaN)).toThrow('Invalid input: minutes must be a number.');
    });

    test('Passing object argument.', () => {
        expect(() => getZero({} as unknown as number)).toThrow('Invalid input: minutes must be a number.');
    });

    test('Passing null argument.', () => {
        expect(() => getZero(null as unknown as number)).toThrow('Invalid input: minutes must be a number.');
    });

    test('Passing undefined argument.', () => {
        expect(() => getZero(undefined as unknown as number)).toThrow('Invalid input: minutes must be a number.');
    });

    test('Passing string argument.', () => {
        expect(() => getZero('5' as unknown as number)).toThrow('Invalid input: minutes must be a number.');
    });
});
