import React from 'react';
import settings from '@/helpers/SettingsColor';

export default function useModalSettings() {
    const settingsColor = React.useRef(settings);
    const [enterBtnText, setEnterBtnText] = React.useState<string>('write to disk [enter]');
    const [inputValue, setInputValue] = React.useState<{
        hue: number;
        size: number;
    }>({
        hue: 0,
        size: 0,
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

            settingsColor.current!.save();
            setEnterBtnText('saved!');
        }
    };

    const handleEnterKey = (event: KeyboardEvent): void => {
        if (event.key === 'Enter') transformSaveFn();
    };

    React.useEffect(() => {
        window.addEventListener('keydown', handleEnterKey);
        setInputValue(() => {
            return {
                hue: settingsColor.current!.getColorInputValue(),
                size: settingsColor.current!.getSizeInputValue(),
            };
        });

        return () => {
            refClearTimeout();
            window.removeEventListener('keydown', handleEnterKey);
        };
    }, []);

    const handleDefault = (): void => {
        settingsColor.current!.default();
        setInputValue({
            hue: settingsColor.current!.getColorInputValue(),
            size: settingsColor.current!.getSizeInputValue(),
        });
    };

    const changeSettingValue = (event: React.ChangeEvent<HTMLInputElement>, variableName: 'hue' | 'size') => {
        if (variableName === 'size') settingsColor.current!.changeValueInputSize(event);
        if (variableName === 'hue') settingsColor.current!.changeValueInputColor(event);

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
}
