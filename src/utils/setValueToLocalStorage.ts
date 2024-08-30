const setValueToLocalStorage = <T>(key: string, value: T): void => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        throw new Error(`Error adding data ${value} to local storage`);
    }
};

export { setValueToLocalStorage };
