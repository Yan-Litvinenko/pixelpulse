import React from 'react';
import { ContextApp } from '../components/app/App';
import { IAppContext } from '../interfaces/interface';

const useSlider = (
    slider: React.MutableRefObject<HTMLDivElement | null>,
    vectorLeft: React.MutableRefObject<HTMLImageElement | null>,
    vectorRight: React.MutableRefObject<HTMLImageElement | null>,
): number => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const [countSlider, setCountSlider] = React.useState<number>(0);

    if (!contextApp) return 0;

    const rollSlider = (content: HTMLDivElement | null, counter: number): void => {
        if (content) {
            const transformValue: string = `translateX(-${counter}00%)`;
            if (content.style.transform !== transformValue) {
                content.style.transform = transformValue;
            }
        }
    };

    const nextSlide = () => {
        setCountSlider((prev) => {
            const count: number = prev + 1;

            if (contextApp.projectImages.length - 1 < count) return count - 1;

            rollSlider(slider.current, count);
            return count;
        });
    };

    const prevSlide = () => {
        setCountSlider((prev) => {
            const count: number = prev - 1;

            if (count < 0) return 0;

            rollSlider(slider.current, count);
            return count;
        });
    };

    React.useEffect(() => {
        const leftElement: HTMLImageElement | null = vectorLeft.current;
        const rightElement: HTMLImageElement | null = vectorRight.current;

        const handleLeftClick = (): void => prevSlide();
        const handleRightClick = (): void => nextSlide();

        if (leftElement) {
            leftElement.addEventListener('click', handleLeftClick);
        }
        if (rightElement) {
            rightElement.addEventListener('click', handleRightClick);
        }

        return () => {
            if (leftElement) {
                leftElement.removeEventListener('click', handleLeftClick);
            }
            if (rightElement) {
                rightElement.removeEventListener('click', handleRightClick);
            }
        };
    }, []);

    return countSlider;
};

export default useSlider;
