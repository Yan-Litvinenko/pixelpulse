export type Rarity = 'legendary' | 'epic' | 'rare' | 'unusual';
export type ToggleStatus = 'all' | 'achieved' | 'inProgress';
export type ExecutionStatus = 'achieved' | 'in progress';

export type Achieve = {
    date: string;
    description: string;
    rarity: string;
    status: string;
    title: string;
};

export type AchievementsAchieveProps = Omit<Achieve, 'status'> & {
    executionStatus: ExecutionStatus;
};

export type AchievementsToggleProps = {
    checked: boolean;
    id: ToggleStatus;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    textContent: string;
    value: ToggleStatus;
};

export type AchievementsBlockProps = {
    prefixForClassName: 'achieved' | 'ongoing';
    achievements: Achieve[];
};

export type AchievementsProgressRing = {
    percent: number;
};
