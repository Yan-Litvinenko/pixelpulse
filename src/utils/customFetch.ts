const customFetch = async <T>(url: string): Promise<T> => {
    const response: Response = await fetch(url);
    const result: T = await response.json();
    return result;
};

export { customFetch };
