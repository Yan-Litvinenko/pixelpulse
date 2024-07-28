import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const useLocalStorage = <T>(initValue: T, key: string): [T, Dispatch<SetStateAction<T>>] => {
    const prefix: string = 'pixelpulse-';
    const [value, setValue] = useState<T>(() => {
        const localStorageData: string | null = localStorage.getItem(prefix + key);

        return localStorageData ? JSON.parse(localStorageData) : initValue;
    });

    useEffect(() => {
        localStorage.setItem(prefix + key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export { useLocalStorage };
