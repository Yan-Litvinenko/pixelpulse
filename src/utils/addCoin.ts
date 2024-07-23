import requestToTheServer from './requestToTheServer';

interface IAddCoin {
    setLevel: React.Dispatch<React.SetStateAction<string>>;
    setCoins: React.Dispatch<React.SetStateAction<string>>;
    setIsAddedCoinToday: React.Dispatch<React.SetStateAction<boolean>>;
    // setAchievements: React.Dispatch<React.SetStateAction<IAchieve[]>>;
}

const addCoin = async (setState: IAddCoin): Promise<void> => {
    try {
        const fetchAddToday: boolean = await requestToTheServer<boolean>('/status_add_today');
        const fetchAddCoinStatus: boolean = await requestToTheServer<boolean>('/add_coin');

        if (fetchAddCoinStatus && !fetchAddToday) {
            const updateStatistics = async () => {
                try {
                    const fetchedLevel: string = await requestToTheServer<string>('/level');
                    const fetchedCoins: string = await requestToTheServer<string>('/coins');
                    const fetchedAddToday: boolean = await requestToTheServer<boolean>('/status_add_today');

                    setState.setLevel(fetchedLevel);
                    setState.setCoins(fetchedCoins);
                    setState.setIsAddedCoinToday(fetchedAddToday);
                } catch (error) {
                    console.error('Failed to fetch data:', error);
                }
            };

            await updateStatistics();

            // const achievements: IAchieve[] = await fetchAchievements();
            // setState.setAchievements(achievements);
        } else {
            console.error('Coin addition was not successful.');
        }
    } catch (error) {
        console.error('Failed to add coin:', error);
    }
};

export default addCoin;
