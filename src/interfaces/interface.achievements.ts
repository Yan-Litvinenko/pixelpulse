type Rarity = 'legendary' | 'epic' | 'rare' | 'unusual';
type SwitchAchieved = 'all' | 'achieved' | 'inProgress';
type AchievedStatus = 'achieved' | 'in progress';
type AchievedPrefix = 'achieved' | 'ongoing';

interface IAchieve {
    date: string;
    description: string;
    rarity: string;
    status: string;
    title: string;
}

export { Rarity, SwitchAchieved, IAchieve, AchievedStatus, AchievedPrefix };
