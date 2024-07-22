import React from 'react';
import { debounce } from '../utils/debounce';

type UseLogsUpdate = [
    boolean[],
    number[],
    React.Dispatch<React.SetStateAction<boolean[]>>,
    React.MutableRefObject<(HTMLParagraphElement | null)[]>,
];

const useLogsUpdate = (update: Record<string, string>[], classForRemove: string): UseLogsUpdate => {
    const [expandStates, setExpandStates] = React.useState<boolean[]>(update.map(() => false));
    const [clippedIndexes, setClippedIndexes] = React.useState<number[]>([]);
    const textRefs = React.useRef<(HTMLParagraphElement | null)[]>([]);

    const handleResize = debounce((): void => {
        const newClippedIndexes: number[] = [];
        const sizePx: number = Number(
            getComputedStyle(document.documentElement).getPropertyValue('--size').replace('px', ''),
        );
        const maxRemHeight: number = 2.84765625;

        textRefs.current.forEach((textElement, index) => {
            if (textElement) {
                textElement.classList.remove(classForRemove);

                const rect: DOMRect = textElement.getBoundingClientRect();

                if (rect.height / sizePx > maxRemHeight) {
                    newClippedIndexes.push(index);
                }
            }
        });

        setClippedIndexes(newClippedIndexes);
    }, 10);

    React.useEffect(() => {
        const observer: ResizeObserver = new ResizeObserver(handleResize);

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

    return [expandStates, clippedIndexes, setExpandStates, textRefs];
};

export { useLogsUpdate };
