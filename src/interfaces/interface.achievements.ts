type Rarity = 'legendary' | 'epic' | 'rare' | 'unusual';
type ToggleStatus = 'all' | 'achieved' | 'inProgress';
type ExecutionStatus = 'achieved' | 'in progress';

type IAchieve = {
    date: string;
    description: string;
    rarity: string;
    status: string;
    title: string;
};

type IAchievementsAchieve = Omit<IAchieve, 'status'> & {
    executionStatus: ExecutionStatus;
};

type IAchievementsToggle = {
    checked: boolean;
    id: ToggleStatus;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    textContent: string;
    value: ToggleStatus;
};

type IAchievementsBlock = {
    prefixForClassName: 'achieved' | 'ongoing';
    achievements: IAchieve[];
};

type IAchievementsProgressRing = {
    percent: number;
};

export type {
    ExecutionStatus,
    IAchieve,
    IAchievementsAchieve,
    IAchievementsBlock,
    IAchievementsProgressRing,
    IAchievementsToggle,
    Rarity,
    ToggleStatus,
};
