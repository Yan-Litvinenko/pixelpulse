import React from 'react';
import { settings } from '../classes/Settings';

const useModalSettings = () => {
    const [enterBtnText, setEnterBtnText] = React.useState<string>('write to disk [enter]');
    const [inputValue, setInputValue] = React.useState({
        hue: settings.getColorInputValue(),
        size: settings.getSizeInputValue(),
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

            settings.save();
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
        settings.default();
        setInputValue({
            hue: settings.getColorInputValue(),
            size: settings.getSizeInputValue(),
        });
    };

    const changeSettingValue = (event: React.ChangeEvent<HTMLInputElement>, variableName: 'hue' | 'size') => {
        if (variableName === 'size') settings.changeValueInputSize(event);
        if (variableName === 'hue') settings.changeValueInputColor(event);

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
