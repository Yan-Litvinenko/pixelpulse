type Rarity = 'legendary' | 'epic' | 'rare' | 'unusual';
type ToggleStatus = 'all' | 'achieved' | 'inProgress';
type ExecutionStatus = 'achieved' | 'in progress';

interface IAchieve {
    date: string;
    description: string;
    rarity: string;
    status: string;
    title: string;
}

interface IAchievementsToggle {
    checked: boolean;
    id: ToggleStatus;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    textContent: string;
    value: ToggleStatus;
}

interface IAchievementsBlock {
    forWhatAchievements: 'achieved' | 'in progress';
    prefixForClassName: 'achieved' | 'ongoing';
    toggleStatus: ToggleStatus;
}

interface IAchievementsAchieve {
    date: string;
    description: string;
    rarity: Rarity;
    executionStatus: ExecutionStatus;
    title: string | 'ongoing';
}

interface IAchievementsProgressRing {
    percent: number;
}

export {
    ExecutionStatus,
    IAchieve,
    IAchievementsAchieve,
    IAchievementsBlock,
    IAchievementsProgressRing,
    IAchievementsToggle,
    Rarity,
    ToggleStatus,
};
