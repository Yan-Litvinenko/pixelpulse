import { defer } from 'react-router-dom';
import { routerHash } from '../../classes/RouterHash';

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
        level: routerHash.has('level') ? routerHash.dehash('level') : getLevel(),
        coins: routerHash.has('coins') ? routerHash.dehash('coins') : getCoins(),
        coinAdditionStatus: routerHash.has('addStatus') ? routerHash.dehash('addStatus') : getCoinAdditionStatus(),
        visitInConsole: addVisitInConsole(),
    };

    return defer(load);
};

export { appLoader };
