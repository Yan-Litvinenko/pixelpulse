type Page = 'welcome' | 'beginning' | 'about' | 'logs' | 'achievements' | 'creations' | 'games';

type IAddCoinResult = {
    level: number;
    coins: number;
    addStatus: boolean;
    isLoad: boolean;
};

type ResolveError = {
    status: string;
    message: string;
};

export type { Page, IAddCoinResult, ResolveError };
