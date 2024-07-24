import { defer } from 'react-router-dom';

const addVisitInConsole = async (): Promise<void> => {
    await fetch('/visit');
};

const getCoinAdditionStatus = async (): Promise<boolean> => {
    const query = await fetch('/api/getStatusAddToday');
    return query.json();
};

const getCoins = async (): Promise<string> => {
    const query = await fetch('/api/getCoins');
    return query.json();
};

const getLevel = async (): Promise<string> => {
    const query = await fetch('/api/getLevel');
    return query.json();
};

const appLoader = () => {
    return defer({
        level: getLevel(),
        coins: getCoins(),
        coinAdditionStatus: getCoinAdditionStatus(),
        visitInConsole: addVisitInConsole(),
    });
};

export { appLoader };
