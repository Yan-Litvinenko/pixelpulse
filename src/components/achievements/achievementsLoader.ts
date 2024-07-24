import { defer } from 'react-router-dom';
import { IAchieve, ToggleStatus } from '../../interfaces/interface.achievements';

const getAchievements = async (): Promise<IAchieve[]> => {
    const response: Response = await fetch('/api/getAchievements');

    return response.json();
};

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

const achievementsLoader = () => {
    return defer({
        achievements: getAchievements(),
    });
};

export { achievementsLoader, achievementsFilter, achievementsSort };
