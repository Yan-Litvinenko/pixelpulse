const requestForServer = async <T>(path: string): Promise<T> => {
    try {
        const response: Response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Error fetching data from ${path}`);
        }
        const data = (await response.json()) as T;
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        setTimeout(() => {
            requestForServer(path);
        }, 1000);
        throw error;
    }
};

export default requestForServer;
