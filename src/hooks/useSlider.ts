import React from 'react';
import { useAppContext } from './useAppContext';

const useSlider = (
    slider: React.MutableRefObject<HTMLDivElement | null>,
    vectorLeft: React.MutableRefObject<HTMLImageElement | null>,
    vectorRight: React.MutableRefObject<HTMLImageElement | null>,
): number => {
    const { projectImages, targetImage, handleSoundClick } = useAppContext();
    const [countSlider, setCountSlider] = React.useState<number>(targetImage);

    let xDown: number = 0;
    let yDown: number = 0;

    const rollSlider = (content: HTMLDivElement | null, counter: number): void => {
        if (content) {
            const transformValue: string = `translateX(-${counter}00%)`;

            if (content.style.transform !== transformValue) content.style.transform = transformValue;
            handleSoundClick();
        }
    };

    const nextSlide = (): void => {
        setCountSlider((prev) => {
            const count: number = prev + 1;

            if (projectImages.length - 1 < count) return count - 1;

            rollSlider(slider.current, count);
            return count;
        });
    };

    const prevSlide = (): void => {
        setCountSlider((prev) => {
            const count: number = prev - 1;

            if (count < 0) return 0;

            rollSlider(slider.current, count);
            return count;
        });
    };

    const mouseStart = (event: MouseEvent): void => {
        xDown = event.clientX;
        yDown = event.clientY;
    };

    const mouseMove = (event: MouseEvent): void => {
        if (!xDown || !yDown) return;

        const xUp: number = event.clientX;
        const yUp: number = event.clientY;
        const xDiff: number = xDown - xUp;
        const yDiff: number = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) nextSlide();
            if (xDiff < 0) prevSlide();
        }

        xDown = 0;
        yDown = 0;
    };

    const touchStart = (event: TouchEvent): void => {
        xDown = event.touches[0].clientX;
        yDown = event.touches[0].clientY;
    };

    const touchMove = (event: TouchEvent): void => {
        if (!xDown || !yDown) return;

        const xUp: number = event.touches[0].clientX;
        const yUp: number = event.touches[0].clientY;
        const xDiff: number = xDown - xUp;
        const yDiff: number = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) nextSlide();
            if (xDiff < 0) prevSlide();
        }

        xDown = 0;
        yDown = 0;
    };

    const setTransformSider = (sliderContainer: HTMLDivElement): void => {
        sliderContainer.style.transform = `translateX(-${targetImage}00%)`;
    };

    React.useEffect(() => {
        const leftElement: HTMLImageElement | null = vectorLeft.current;
        const rightElement: HTMLImageElement | null = vectorRight.current;
        const sliderBody: HTMLDivElement | null = slider.current;

        if (leftElement) {
            leftElement.addEventListener('click', prevSlide);
        }
        if (rightElement) {
            rightElement.addEventListener('click', nextSlide);
        }

        if (sliderBody) {
            sliderBody.addEventListener('touchstart', touchStart);
            sliderBody.addEventListener('touchmove', touchMove);
            sliderBody.addEventListener('mousedown', mouseStart);
            sliderBody.addEventListener('mousemove', mouseMove);
            setTransformSider(sliderBody);
        }

        return () => {
            if (leftElement) leftElement.removeEventListener('click', prevSlide);
            if (rightElement) rightElement.removeEventListener('click', nextSlide);
            if (sliderBody) {
                sliderBody.removeEventListener('touchstart', touchStart);
                sliderBody.removeEventListener('touchmove', touchMove);
                sliderBody.removeEventListener('mousemove', mouseMove);
                sliderBody.removeEventListener('mousedown', mouseStart);
            }
        };
    }, []);

    return countSlider;
};

export { useSlider };
