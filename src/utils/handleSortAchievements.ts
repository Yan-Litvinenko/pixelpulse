import { IAchieve, SwitchAchieved } from '../interfaces/interface.achievements';

const handleSortAchievements = (achievements: IAchieve[], checkedStatus: SwitchAchieved): IAchieve[] => {
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

    const filteredAchievements: IAchieve[] = sortAchievements.filter((achieve) => {
        if (checkedStatus === 'all') return true;
        if (checkedStatus === 'achieved') return achieve.status === 'achieved';
        if (checkedStatus === 'inProgress') return achieve.status === 'in progress';
        return false;
    });

    return filteredAchievements;
};

export default handleSortAchievements;
