import React from 'react';
import debounce from '@/helpers/debounce';
import type { UpdateItem } from '@/interface/logs/Logs.interface';

type UseLogsUpdate = [
    boolean[],
    number[],
    React.Dispatch<React.SetStateAction<boolean[]>>,
    (element: HTMLParagraphElement | null, index: number) => void,
];

export default function useLogsUpdate(update: UpdateItem[], classForRemove: string): UseLogsUpdate {
    const [expandStates, setExpandStates] = React.useState<boolean[]>(update.map(() => false));
    const [clippedIndexes, setClippedIndexes] = React.useState<number[]>([]);
    const textRefs = React.useRef<(HTMLParagraphElement | null)[]>([]);

    const calculateClippedIndexes = React.useCallback(() => {
        const newClippedIndexes: number[] = [];
        const maxHeight: number = 45.5;

        textRefs.current.forEach((textElement, index) => {
            if (textElement) {
                textElement.classList.remove(classForRemove);

                const rect: DOMRect = textElement.getBoundingClientRect();

                if (Math.floor(rect.height) > maxHeight) {
                    newClippedIndexes.push(index);
                }
            }
        });

        setClippedIndexes(newClippedIndexes);
    }, [classForRemove]);

    React.useEffect(() => {
        const handleResize = debounce(calculateClippedIndexes, 10);
        const observer = new ResizeObserver(() => handleResize());

        textRefs.current.forEach((textElement) => {
            if (textElement) observer.observe(textElement);
        });

        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleResize);
        };
    }, []);

    const setRef = React.useCallback((element: HTMLParagraphElement | null, index: number): void => {
        if (element) textRefs.current[index] = element;
    }, []);

    return [expandStates, clippedIndexes, setExpandStates, setRef];
}
