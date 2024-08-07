import type { IAchieve } from '../interfaces/interface.achievements';

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

export { achievementsSort };
