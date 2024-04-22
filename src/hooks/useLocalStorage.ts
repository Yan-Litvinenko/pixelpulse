import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const useLocalStorage = (initValue: boolean, key: string): [boolean, Dispatch<SetStateAction<boolean>>] => {
    const [value, setValue] = useState<boolean>(() => {
        const localStorageData: string | null = localStorage.getItem(key);

        return localStorageData ? JSON.parse(localStorageData) : initValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;
