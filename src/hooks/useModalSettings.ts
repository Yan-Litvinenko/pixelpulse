import React from 'react';
import {
    handleDefaultSettings,
    handleInitSettingValue,
    handleSaveSetting,
    handleSettingColor,
    handleSettingSize,
} from './../utils/handleSettings';

const useModalSettings = () => {
    const [enterText, setEnterText] = React.useState<string>('write to disk [enter]');
    const [settings, setSettings] = React.useState({
        hue: handleInitSettingValue('hue'),
        saturation: handleInitSettingValue('saturation'),
        lightness: handleInitSettingValue('lightness'),
        size: handleInitSettingValue('size'),
    });

    const timer = React.useRef<NodeJS.Timeout | null>(null);

    const handleModifySaveSetting = React.useCallback((): void => {
        if (enterText === 'write to disk [enter]') {
            handleSaveSetting();
            setEnterText('saved!');

            timer.current = setTimeout(() => {
                setEnterText('write to disk [enter]');
            }, 2000);
        }
    }, [enterText]);

    const handleButtonEnter = React.useCallback(
        (event: KeyboardEvent): void => {
            if (event.key === 'Enter') {
                handleModifySaveSetting();
            }
        },
        [handleModifySaveSetting],
    );

    React.useEffect(() => {
        window.addEventListener('keydown', handleButtonEnter);

        return () => {
            if (timer.current) clearTimeout(timer.current);
            window.removeEventListener('keydown', handleButtonEnter);
        };
    }, [handleButtonEnter]);

    const handleResetSettings = React.useCallback((): void => {
        handleDefaultSettings();
        setSettings({
            hue: handleInitSettingValue('hue'),
            saturation: handleInitSettingValue('saturation'),
            lightness: handleInitSettingValue('lightness'),
            size: handleInitSettingValue('size'),
        });
    }, []);

    const changeSettingValue = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>, variableName: 'hue' | 'saturation' | 'lightness' | 'size') => {
            setSettings((prevSettings) => ({
                ...prevSettings,
                [variableName]: Number(event.target.value),
            }));
            if (variableName === 'size') {
                handleSettingSize(event);
            } else {
                handleSettingColor()(event, variableName);
            }
        },
        [],
    );

    return {
        enterText,
        settings,
        handleResetSettings,
        handleModifySaveSetting,
        changeSettingValue,
    };
};

export default useModalSettings;
