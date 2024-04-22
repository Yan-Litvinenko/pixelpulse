import { useEffect, useState, Dispatch, SetStateAction } from 'react';

const useRange = (
    initValue: number,
    progress: React.MutableRefObject<HTMLDivElement | null>,
    thumb: React.MutableRefObject<HTMLDivElement | null>,
): [number, Dispatch<SetStateAction<number>>] => {
    const [value, setValue] = useState<number>(initValue);

    useEffect(() => {
        if (progress.current && thumb.current) {
            progress.current.style.width = value + '%';
            thumb.current.style.left = value + '%';
            thumb.current.style.transform = `translateX(-${value}%)`;
        }
    }, [value]);

    return [value, setValue];
};

export default useRange;
