type Rarity = 'legendary' | 'epic' | 'rare' | 'unusual';
type SwitchAchieved = 'all' | 'achieved' | 'inProgress';
type AchieveStatus = 'achieved' | 'ongoin';
type AchievedPrefix = 'achieved' | 'in progress';

interface IAchieve {
    date: string;
    description: string;
    rarity: string;
    status: string;
    title: string;
}

export { Rarity, SwitchAchieved, IAchieve, AchieveStatus, AchievedPrefix };
