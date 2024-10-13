import React from 'react';
import type { UsePrintedText } from '@/interface/welcome/Welcome.interface';

export default function usePrintedText(textForPrint: string, delay: number = 0): UsePrintedText {
    const [animationText, setAnimationText] = React.useState<string>('');
    const [animationEnd, setAnimationEnd] = React.useState<boolean>(false);
    const [timers, setTimers] = React.useState<NodeJS.Timeout[]>([]);
    const animationStarted = React.useRef<boolean>(false);

    const setStatusAnimation = (newStatus: boolean): boolean => (animationStarted.current = newStatus);

    const printed = (i: number): void => {
        const timer: NodeJS.Timeout = setTimeout(
            (): void => {
                setAnimationText((prevText) => {
                    const changeText: string = prevText + textForPrint[i];
                    return changeText;
                });

                if (i === textForPrint.length - 1) setAnimationEnd(true);
            },
            delay + i * 50,
        );

        setTimers((prev) => [...prev, timer]);
    };

    React.useEffect(() => {
        if (!animationStarted.current) {
            for (let i = 0; i < textForPrint.length; i++) printed(i);
            setStatusAnimation(true);
        }

        return () => timers.forEach((timer) => clearTimeout(timer));
    }, []);

    return {
        textForPrint,
        animationText,
        setAnimationText,
        animationEnd,
        timers,
    };
}
