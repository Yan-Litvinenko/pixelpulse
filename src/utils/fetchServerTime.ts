interface ServerTimeResponse {
    serverTime: string;
}

const fetchServerTime = async (): Promise<Date> => {
    try {
        const response: Response = await fetch('/server-time');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data: ServerTimeResponse = await response.json();
        const serverTimeUTC = new Date(data.serverTime);

        return serverTimeUTC;
    } catch (error) {
        console.error('Error fetching server time:', error);
        throw error;
    }
};

export default fetchServerTime;
