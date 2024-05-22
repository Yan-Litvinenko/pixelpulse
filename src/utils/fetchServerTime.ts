const fetchServerTime = async (): Promise<Date> => {
    try {
        const response: Response = await fetch('http://localhost:8080/server-time');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data: string = await response.json();
        const serverTimeUTC = new Date(data);

        return serverTimeUTC;
    } catch (error) {
        console.error('Error fetching server time:', error);
        throw error;
    }
};

export default fetchServerTime;
