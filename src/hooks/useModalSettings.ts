import React from 'react';
import { settingsColor } from '../classes/SettingsColor';

const useModalSettings = () => {
    const [enterBtnText, setEnterBtnText] = React.useState<string>('write to disk [enter]');
    const [inputValue, setInputValue] = React.useState({
        hue: settingsColor.getColorInputValue(),
        size: settingsColor.getSizeInputValue(),
    });

    const timer = React.useRef<NodeJS.Timeout | null>(null);
    const refClearTimeout = (): void => {
        if (timer.current) clearTimeout(timer.current);
    };
    const setRefTimer = (): NodeJS.Timeout =>
        (timer.current = setTimeout(() => setEnterBtnText('write to disk [enter]'), 2000));

    const transformSaveFn = (): void => {
        if (enterBtnText === 'write to disk [enter]') {
            refClearTimeout();
            setRefTimer();

            settingsColor.save();
            setEnterBtnText('saved!');
        }
    };

    const handleEnterKey = (event: KeyboardEvent): void => {
        if (event.key === 'Enter') transformSaveFn();
    };

    React.useEffect(() => {
        window.addEventListener('keydown', handleEnterKey);

        return () => {
            refClearTimeout();
            window.removeEventListener('keydown', handleEnterKey);
        };
    }, []);

    const handleDefault = (): void => {
        settingsColor.default();
        setInputValue({
            hue: settingsColor.getColorInputValue(),
            size: settingsColor.getSizeInputValue(),
        });
    };

    const changeSettingValue = (event: React.ChangeEvent<HTMLInputElement>, variableName: 'hue' | 'size') => {
        if (variableName === 'size') settingsColor.changeValueInputSize(event);
        if (variableName === 'hue') settingsColor.changeValueInputColor(event);

        setInputValue((prevSettings) => ({
            ...prevSettings,
            [variableName]: Number(event.target.value),
        }));
    };

    return {
        enterBtnText,
        inputValue,
        handleDefault,
        transformSaveFn,
        changeSettingValue,
    };
};

export { useModalSettings };
