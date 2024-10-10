export type Statistic = {
    level: number;
    coins: number;
};

export type HeaderStatistic = {
    addStatus: boolean;
} & Statistic;
