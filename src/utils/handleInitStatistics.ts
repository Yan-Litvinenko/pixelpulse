import requestForServer from './requestForServer';

const handleIinitStatistics = async (
    setLevel: (value: React.SetStateAction<number>) => void,
    setCoins: (value: React.SetStateAction<number>) => void,
    setIsAddedCoinToday: (value: React.SetStateAction<boolean>) => void,
) => {
    try {
        const fetchedLevel = await requestForServer<number>('/level');
        const fetchedCoins = await requestForServer<number>('/coins');
        const fetchedAddToday = await requestForServer<boolean>('/status_add_today');

        setLevel(fetchedLevel);
        setCoins(fetchedCoins);
        setIsAddedCoinToday(fetchedAddToday);
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
};

export default handleIinitStatistics;
