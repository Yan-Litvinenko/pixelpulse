import React from 'react';

export default function useRange(
    initValue: number,
    setProgress: (value: number) => void,
    setThumb: (value: number) => void,
): [number, React.Dispatch<React.SetStateAction<number>>] {
    const [value, setValue] = React.useState<number>(initValue);

    React.useEffect(() => {
        setProgress(value);
        setThumb(value);
    }, [value]);

    React.useEffect(() => setValue(initValue), [initValue]);

    return [value, setValue];
}
