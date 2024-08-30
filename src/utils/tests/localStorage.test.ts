import { getValueToLocalStorage } from '../getValueToLocalStorage';
import { setValueToLocalStorage } from '../setValueToLocalStorage';

const testKey: string = 'test-key';
const testValue: number = 1;
const defaultValue: number = 0;

describe('getValueToLocalStorage', (): void => {
    beforeEach(() => localStorage.clear());
    test('Should return the value from local storage', (): void => {
        localStorage.setItem(testKey, JSON.stringify(testValue));
        expect(getValueToLocalStorage<number>(testKey, defaultValue)).toBe(testValue);
    });

    test('Should return default value', (): void => {
        expect(getValueToLocalStorage<number>('error key', defaultValue)).toBe(defaultValue);
    });
});

describe('setValueToLocalStorage', (): void => {
    beforeEach(() => localStorage.clear());
    test('Should add the value to local storage', (): void => {
        setValueToLocalStorage(testKey, testValue);

        const result: number = JSON.parse(localStorage.getItem(testKey || String(defaultValue))!);
        expect(result).toBe(testValue);
    });

    test('An error should be thrown', (): void => {
        const largeString: string = 'a'.repeat(10 * 1024 * 1024);

        expect((): void => setValueToLocalStorage(testKey, largeString)).toThrow(
            `Error adding data ${largeString} to local storage`,
        );
    });

    afterAll((): void => localStorage.clear());
});
