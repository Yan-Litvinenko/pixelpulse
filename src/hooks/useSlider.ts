import React from 'react';
import { ContextApp } from '../components/app/App';
import { IContextApp } from '../interfaces/interface';
import soundClick from '../assets/audio/click.ogg';

const useSlider = (
    slider: React.MutableRefObject<HTMLDivElement | null>,
    vectorLeft: React.MutableRefObject<HTMLImageElement | null>,
    vectorRight: React.MutableRefObject<HTMLImageElement | null>,
): number => {
    const contextApp: IContextApp | null = React.useContext(ContextApp);
    const audio = new Audio(soundClick);

    if (!contextApp) return 0;

    const [countSlider, setCountSlider] = React.useState<number>(contextApp.modalProjectImage);

    let xDown: number = 0;
    let yDown: number = 0;

    const rollSlider = (content: HTMLDivElement | null, counter: number): void => {
        if (content) {
            const transformValue: string = `translateX(-${counter}00%)`;
            if (content.style.transform !== transformValue) {
                content.style.transform = transformValue;
            }

            if (contextApp.sounds) {
                audio.play();
            }
        }
    };

    const nextSlide = (): void => {
        setCountSlider((prev) => {
            const count: number = prev + 1;

            if (contextApp.projectImages.length - 1 < count) return count - 1;

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

    React.useEffect(() => {
        const leftElement: HTMLImageElement | null = vectorLeft.current;
        const rightElement: HTMLImageElement | null = vectorRight.current;
        const sliderElement: HTMLDivElement | null = slider.current;

        if (leftElement) {
            leftElement.addEventListener('click', prevSlide);
        }
        if (rightElement) {
            rightElement.addEventListener('click', nextSlide);
        }

        if (sliderElement) {
            sliderElement.addEventListener('touchstart', touchStart);
            sliderElement.addEventListener('touchmove', touchMove);
            sliderElement.addEventListener('mousedown', mouseStart);
            sliderElement.addEventListener('mousemove', mouseMove);
            sliderElement.style.transform = `translateX(-${contextApp.modalProjectImage}00%)`;
        }

        return () => {
            if (leftElement) {
                leftElement.removeEventListener('click', prevSlide);
            }
            if (rightElement) {
                rightElement.removeEventListener('click', nextSlide);
            }

            if (sliderElement) {
                sliderElement.removeEventListener('touchstart', touchStart);
                sliderElement.removeEventListener('touchmove', touchMove);
                sliderElement.removeEventListener('mousemove', mouseMove);
                sliderElement.removeEventListener('mousedown', mouseStart);
            }
        };
    }, []);

    return countSlider;
};

export default useSlider;
