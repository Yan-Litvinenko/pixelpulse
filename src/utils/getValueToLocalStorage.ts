const getValueToLocalStorage = <T>(key: string, defaultValue: T): T => {
    const localStorageData: string | null = localStorage.getItem(key);
    return localStorageData ? JSON.parse(localStorageData) : defaultValue;
};

export { getValueToLocalStorage };
