import { defer } from 'react-router-dom';

const addVisitInConsole = async (): Promise<void> => {
    await fetch('/visit');
};

const getCoinAdditionStatus = async (): Promise<boolean> => {
    const response: Response = await fetch('/api/getStatusAddToday');
    return response.json();
};

const getCoins = async (): Promise<string> => {
    const response: Response = await fetch('/api/getCoins');
    return response.json();
};

const getLevel = async (): Promise<string> => {
    const response: Response = await fetch('/api/getLevel');
    return response.json();
};

const appLoader = () => {
    const load = {
        level: getLevel(),
        coins: getCoins(),
        coinAdditionStatus: getCoinAdditionStatus(),
        visitInConsole: addVisitInConsole(),
    };

    console.log('appLoader:', load);

    return defer(load);
};

export { appLoader };
