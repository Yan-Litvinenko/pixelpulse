import React from 'react';
import { customFetch } from '../utils/customFetch';
import { IAchieve } from '../interfaces/interface.achievements';
import { ToggleStatus } from '../interfaces/interface.achievements';

interface IUseAchievements {
    achievements: IAchieve[] | null;
    isLoad: boolean;
    isError: boolean;
    amountAchievements: number | null;
    amountAchieved: number | null;
    percent: number | null;
    updateAchievements: () => Promise<void>;
}

const achievementsSort = (achievements: IAchieve[]): IAchieve[] => {
    const levelRarity: Record<string, number> = {
        unusual: 1,
        rare: 2,
        epic: 3,
        legendary: 4,
    };

    const sortAchievements: IAchieve[] = achievements.sort((a, b) => {
        const A: number = levelRarity[a.rarity];
        const B: number = levelRarity[b.rarity];

        if (A > B) {
            return 1;
        } else if (A < B) {
            return -1;
        } else {
            return 0;
        }
    });

    return sortAchievements;
};

const achievementsFilter = (
    achievements: IAchieve[],
    checkedStatus: ToggleStatus,
    forWhatAchievements: 'achieved' | 'in progress',
) => {
    const filteredAchievements: IAchieve[] = achievements.filter((achieve) => {
        if (checkedStatus === 'all') return true;
        if (checkedStatus === 'achieved') return achieve.status === 'achieved';
        if (checkedStatus === 'inProgress') return achieve.status === 'in progress';
        return false;
    });

    return filteredAchievements.filter((achieve) => achieve.status === forWhatAchievements);
};

const achievedCount = (allAchievements: IAchieve[]): number =>
    allAchievements.reduce((acc, { status }) => acc + (status === 'achieved' ? 1 : 0), 0);

const useAchievements = <T>(dependence: T): IUseAchievements => {
    const [achievements, setAchievements] = React.useState<IAchieve[] | null>(null);
    const [isLoad, setIsLoad] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);

    const [amountAchievements, setAmountAchievements] = React.useState<null | number>(null);
    const [amountAchieved, setAmouuntAchieved] = React.useState<null | number>(null);
    const [percent, setPercent] = React.useState<null | number>(null);

    const loadAchievements = async (): Promise<void> => {
        try {
            setIsError(false);
            setIsLoad(true);

            const resolveAchievements = await customFetch<IAchieve[]>('/api/getAchievements');

            const resolveAmountAchievements: number = resolveAchievements.length;
            const resolveAmountAchieved: number = achievedCount(resolveAchievements);
            const resolvePercent: number = (resolveAmountAchieved * 100) / resolveAmountAchievements;

            setAmountAchievements(resolveAchievements.length);
            setAmouuntAchieved(achievedCount(resolveAchievements));
            setPercent(resolvePercent);

            setAchievements(resolveAchievements);
            setIsLoad(false);
        } catch (error) {
            setIsError(true);
            setIsLoad(false);
        }
    };

    React.useEffect(() => {
        loadAchievements();
    }, [dependence]);

    return {
        achievements,
        amountAchieved,
        amountAchievements,
        isError,
        isLoad,
        percent,
        updateAchievements: loadAchievements,
    };
};

export { useAchievements, IUseAchievements, achievementsFilter, achievementsSort };
