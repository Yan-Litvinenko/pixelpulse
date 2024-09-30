import type { Achieve, ToggleStatus } from '@/interface/achievements/achievements.interface';

export default function achievementsFilter(
    achievements: Achieve[],
    checkedStatus: ToggleStatus,
    forWhatAchievements: 'achieved' | 'in progress',
) {
    const filteredAchievements: Achieve[] = achievements.filter((achieve) => {
        if (checkedStatus === 'all') return true;
        if (checkedStatus === 'achieved') return achieve.status === 'achieved';
        if (checkedStatus === 'inProgress') return achieve.status === 'in progress';
        return false;
    });

    return filteredAchievements.filter((achieve) => achieve.status === forWhatAchievements);
}
