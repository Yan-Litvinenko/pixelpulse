import requestForServer from './requestForServer';

const handleIinitStatistics = async (
    setLevel: (value: React.SetStateAction<string>) => void,
    setCoins: (value: React.SetStateAction<string>) => void,
    setIsAddedCoinToday: (value: React.SetStateAction<boolean>) => void,
) => {
    try {
        const fetchedLevel = await requestForServer<string>('/level');
        const fetchedCoins = await requestForServer<string>('/coins');
        const fetchedAddToday = await requestForServer<boolean>('/status_add_today');

        setLevel(fetchedLevel);
        setCoins(fetchedCoins);
        setIsAddedCoinToday(fetchedAddToday);
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
};

export default handleIinitStatistics;
