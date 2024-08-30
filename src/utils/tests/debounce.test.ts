import { debounce } from '../debounce';

describe('debounce', (): void => {
    const mockCallback = jest.fn();
    const delay: number = 1000;

    beforeEach(() => jest.useFakeTimers());
    afterEach(() => jest.useRealTimers());

    test('There should only be one call', (): void => {
        const mockDebounceFn = debounce(mockCallback, delay);

        mockDebounceFn();
        mockDebounceFn();
        mockDebounceFn();

        expect(mockCallback).not.toHaveBeenCalled();

        jest.advanceTimersByTime(delay);

        expect(mockCallback).toHaveBeenCalledTimes(1);
    });
});
