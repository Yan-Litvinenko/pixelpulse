import React from 'react';

interface IUsePrintedText {
    text: string;
    animationEnd: boolean;
    timers: NodeJS.Timeout[];
}

const usePrintedText = (fullText: string, delay: number = 0): IUsePrintedText => {
    const [text, setText] = React.useState<string>('');
    const [animationEnd, setAnimationEnd] = React.useState<boolean>(false);
    const [timers, setTimers] = React.useState<NodeJS.Timeout[]>([]);
    const animationStarted = React.useRef<boolean>(false);

    const printed = (i: number): void => {
        const timer: NodeJS.Timeout = setTimeout(
            () => {
                setText((prev) => {
                    const change = prev + fullText[i];
                    return change;
                });

                if (i === fullText.length - 1) {
                    setAnimationEnd(true);
                }
            },
            delay + i * 50,
        );

        setTimers((prev) => [...prev, timer]);
    };

    React.useEffect(() => {
        if (!animationStarted.current) {
            for (let i = 0; i < fullText.length; i++) {
                printed(i);
            }
            animationStarted.current = true;
        }

        return () => {
            timers.forEach((timer) => {
                clearTimeout(timer);
            });
        };
    }, []);

    return {
        text: text,
        animationEnd: animationEnd,
        timers: timers,
    };
};

export default usePrintedText;
