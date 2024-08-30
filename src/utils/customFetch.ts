const customFetch = async <T>(url: string): Promise<T> => {
    try {
        const response: Response = await fetch(url);
        const result: T = await response.json();
        return result;
    } catch (error) {
        throw new Error(`A request error occurred ${url}`);
    }
};

export { customFetch };
