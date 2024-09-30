export default async function customFetch<T>(url: string, revalidate: number = 180, method = 'GET'): Promise<T> {
    try {
        const response: Response = await fetch(url, { method, next: { revalidate } });
        const result: T = await response.json();

        return result;
    } catch (error) {
        throw new Error(`A request error occurred ${url}`);
    }
}
