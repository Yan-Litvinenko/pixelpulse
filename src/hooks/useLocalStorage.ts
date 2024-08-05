import React from 'react';
import type { SetStateAction, Dispatch } from 'react';

const useLocalStorage = <T>(initValue: T, key: string): [T, Dispatch<SetStateAction<T>>] => {
    const prefix: string = 'pixelpulse-';
    const [value, setValue] = React.useState<T>(() => {
        const localStorageData: string | null = localStorage.getItem(prefix + key);

        return localStorageData ? JSON.parse(localStorageData) : initValue;
    });

    React.useEffect(() => {
        localStorage.setItem(prefix + key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export { useLocalStorage };
