import type { IAchieve, ToggleStatus } from '../interfaces/interface.achievements';

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

export { achievementsFilter };
