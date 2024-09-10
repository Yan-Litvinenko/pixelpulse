import React from 'react';

interface IUsePrintedText {
    animationText: string;
    setAnimationText: React.Dispatch<React.SetStateAction<string>>;
    animationEnd: boolean;
    timers: NodeJS.Timeout[];
}

const usePrintedText = (originalText: string, delay: number = 0): IUsePrintedText => {
    const [animationText, setAnimationText] = React.useState<string>('');
    const [animationEnd, setAnimationEnd] = React.useState<boolean>(false);
    const [timers, setTimers] = React.useState<NodeJS.Timeout[]>([]);
    const animationStarted = React.useRef<boolean>(false);

    const setStatusAnimation = (newStatus: boolean): boolean => (animationStarted.current = newStatus);

    const printed = (i: number): void => {
        const timer: NodeJS.Timeout = setTimeout(
            (): void => {
                setAnimationText((prevText) => {
                    const changeText: string = prevText + originalText[i];
                    return changeText;
                });

                if (i === originalText.length - 1) setAnimationEnd(true);
            },
            delay + i * 50,
        );

        setTimers((prev) => [...prev, timer]);
    };

    React.useEffect(() => {
        if (!animationStarted.current) {
            for (let i = 0; i < originalText.length; i++) printed(i);
            setStatusAnimation(true);
        }

        return () => timers.forEach((timer) => clearTimeout(timer));
    }, []);

    return {
        animationText,
        setAnimationText,
        animationEnd,
        timers,
    };
};

export { usePrintedText };
