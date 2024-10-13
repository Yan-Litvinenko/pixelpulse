export default function getValueToLocalStorage<T>(key: string, defaultValue: T): T {
    if (typeof window === 'undefined') {
        return defaultValue;
    }

    const localStorageData: string | null = localStorage.getItem(key);
    return localStorageData ? JSON.parse(localStorageData) : defaultValue;
}
