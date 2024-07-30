import React from 'react';
import { IAddCoinResult } from '../interfaces/interface';
import { customFetch } from '../utils/customFetch';

interface IUseHeaderStatistic {
    level: number | null;
    coins: number | null;
    addStatus: boolean;
    isLoad: boolean;
    isError: boolean;
    addCoin: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;
}

const useHeaderStatistic = (): IUseHeaderStatistic => {
    const [addStatus, setAddStatus] = React.useState<boolean>(true);
    const [coins, setCoins] = React.useState<number | null>(null);
    const [level, setLevel] = React.useState<number | null>(null);
    const [isError, setIsError] = React.useState<boolean>(false);
    const [isLoad, setIsLoad] = React.useState<boolean>(false);

    const initResponse = (): void => {
        setIsError(false);
        setIsLoad(true);
    };

    const successfulCompletion = (levelComplete: number, coinsComplete: number, statusComplete: boolean): void => {
        setLevel(levelComplete);
        setCoins(coinsComplete);
        setAddStatus(statusComplete);
        setIsLoad(false);
    };

    const errorResponse = (): void => {
        setLevel(null);
        setCoins(null);
        setIsError(true);
        setAddStatus(false);
        setIsLoad(false);
    };

    const loadStatistic = async (): Promise<void> => {
        try {
            initResponse();

            const resolveLevel: number = await customFetch<number>('/api/getLevel');
            const resolveCoins: number = await customFetch<number>('/api/getCoins');
            const resolveAddStatus: boolean = await customFetch<boolean>('/api/getStatusAddToday');

            successfulCompletion(resolveLevel, resolveCoins, resolveAddStatus);
        } catch (error) {
            errorResponse();
            console.error(`Error loading header statistic: ${error}`);
        }
    };

    const addCoin = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
        event.preventDefault();

        try {
            initResponse();

            const response: Response = await fetch('/addCoin', { method: 'POST' });
            const updateStatistic: IAddCoinResult | false = await response.json();

            if (updateStatistic) {
                setTimeout(() => {
                    successfulCompletion(updateStatistic.level, updateStatistic.coins, updateStatistic.addStatus);
                }, 500);
            }
        } catch (error) {
            errorResponse();
        }
    };

    React.useEffect(() => {
        loadStatistic();
    }, []);

    return {
        level,
        coins,
        addStatus,
        addCoin,
        isLoad,
        isError,
    };
};

export { useHeaderStatistic, IUseHeaderStatistic };
