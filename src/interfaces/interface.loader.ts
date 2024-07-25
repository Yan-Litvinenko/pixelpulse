interface IAppDataLoader {
    level: {
        _data: string;
    };
    coins: {
        _data: string;
    };
    coinAdditionStatus: {
        _data: boolean;
    };
}

interface ResolveError {
    status: string;
    message: string;
}

interface IAddCoinResult {
    level: number;
    coins: number;
    status: boolean;
    coinAdditionStatus: boolean;
}

type ResolveAppLoader = [string | ResolveError, string | ResolveError, boolean | ResolveError];

export { IAppDataLoader, ResolveAppLoader, ResolveError, IAddCoinResult };
