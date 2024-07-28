import React from 'react';

const useRange = (
    initValue: number,
    progress: React.MutableRefObject<HTMLDivElement | null>,
    thumb: React.MutableRefObject<HTMLDivElement | null>,
): [number, React.Dispatch<React.SetStateAction<number>>] => {
    const [value, setValue] = React.useState<number>(initValue);

    React.useEffect(() => {
        if (progress.current && thumb.current) {
            progress.current.style.width = value + '%';
            thumb.current.style.left = value + '%';
            thumb.current.style.transform = `translateX(-${value}%)`;
        }
    }, [value]);

    return [value, setValue];
};

export { useRange };
