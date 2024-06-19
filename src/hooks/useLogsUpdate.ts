import React from 'react';

type ReturnUseLogsUpdate = [
    boolean[],
    number[],
    React.Dispatch<React.SetStateAction<boolean[]>>,
    React.MutableRefObject<(HTMLParagraphElement | null)[]>,
];

const useLogsUpdate = (update: Record<string, string>[], classRemove: string): ReturnUseLogsUpdate => {
    const [expandStates, setExpandStates] = React.useState<boolean[]>(update.map(() => false));
    const [clippedIndexes, setClippedIndexes] = React.useState<number[]>([]);
    const textRefs = React.useRef<(HTMLParagraphElement | null)[]>([]);

    const handleResize = React.useCallback((): void => {
        const newClippedIndexes: number[] = [];
        const sizePx: number = Number(
            getComputedStyle(document.documentElement).getPropertyValue('--size').replace('px', ''),
        );
        const maxRemHeight: number = 2.84765625;

        textRefs.current.forEach((textElement, index) => {
            if (textElement) {
                textElement.classList.remove(classRemove);
                const rect: DOMRect = textElement.getBoundingClientRect();

                if (rect.height / sizePx > maxRemHeight) {
                    newClippedIndexes.push(index);
                }
            }
        });

        console.log('update array indexes:', newClippedIndexes);
        setClippedIndexes(newClippedIndexes);
    }, []);

    React.useEffect(() => {
        const observer: ResizeObserver = new ResizeObserver(handleResize);

        window.addEventListener('resize', handleResize);

        textRefs.current.forEach((textElement) => {
            if (textElement) {
                observer.observe(textElement);
            }
        });

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
            observer.disconnect();
        };
    }, []);

    return [expandStates, clippedIndexes, setExpandStates, textRefs];
};

export default useLogsUpdate;
