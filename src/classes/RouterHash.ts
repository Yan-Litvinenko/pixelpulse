import { HashKey } from '../interfaces/interface';

class RouterHash {
    private KEYS: Record<HashKey, string>;
    private initHashKey: string;

    constructor() {
        this.initHashKey = 'pixelpulse-init-hash';
        this.KEYS = {
            addStatus: 'pixelpulse-add-status',
            coins: 'pixelpulse-coins',
            level: 'pixelpulse-level',
        };

        this.destroyHash();
        this.init();
    }

    private init(): void {
        localStorage.setItem(this.initHashKey, JSON.stringify(new Date().getTime()));
    }

    public hash<T>(key: HashKey, data: T): void {
        localStorage.setItem(this.KEYS[key], JSON.stringify(data));
    }

    public has(key: HashKey): boolean {
        const hash: string | null = localStorage.getItem(this.KEYS[key]);
        return !!hash;
    }

    public dehash<T>(key: HashKey): T {
        const hash = localStorage.getItem(this.KEYS[key]);

        if (!hash) throw new Error(`Error dehash ${this.KEYS[key]}`);

        return JSON.parse(hash);
    }

    public updateHash<T>(key: HashKey, data: T): void {
        const hash: string | null = localStorage.getItem(this.KEYS[key]);
        const updateData: string = JSON.stringify(data);

        if (hash !== updateData) localStorage.setItem(this.KEYS[key], updateData);
    }

    public destroyHash(): void {
        const now: number = new Date().getTime();
        const init = localStorage.getItem(this.initHashKey);

        if (init && now - Number(init) > 5000) {
            Object.values(this.KEYS).forEach((key) => localStorage.removeItem(key));
        }
    }
}

const routerHash = new RouterHash();

export { routerHash };
