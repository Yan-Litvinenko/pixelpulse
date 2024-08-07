type Page = 'welcome' | 'beginning' | 'about' | 'logs' | 'achievements' | 'creations' | 'games';

interface IAddCoinResult {
    level: number;
    coins: number;
    addStatus: boolean;
    isLoad: boolean;
}

interface ResolveError {
    status: string;
    message: string;
}

export type { Page, IAddCoinResult, ResolveError };
