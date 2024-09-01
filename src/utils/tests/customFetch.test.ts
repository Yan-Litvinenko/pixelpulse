import { customFetch } from '../customFetch';

describe('custom fetch', (): void => {
    const url: string = 'https://api.test.com/data';
    const mockResponse = {
        data: 'success server response',
    };

    global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockResponse),
    });

    test('Should return data from fetch', async () => {
        const result = await customFetch<typeof mockResponse>(url);

        expect(fetch).toHaveBeenCalledWith(url);
        expect(result).toBe(mockResponse);
    });

    test('Should return error', (): void => {
        global.fetch = jest.fn().mockResolvedValue(new Error(`A request error occurred ${url}`));
        expect(() => customFetch(url)).rejects.toThrow(`A request error occurred ${url}`);
    });
});
