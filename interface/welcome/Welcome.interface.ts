type Key = 'title' | 'text_1' | 'text_2';

export type AnimatedText = { [k in Key]: string };

export type UsePrintedText = {
    animationEnd: boolean;
    animationText: string;
    setAnimationText: React.Dispatch<React.SetStateAction<string>>;
    textForPrint: string;
    timers: NodeJS.Timeout[];
};

export type UseWelcome = {
    setSkipPressed: React.Dispatch<React.SetStateAction<boolean>>;
    skipButton: React.MutableRefObject<HTMLButtonElement | null>;
    skipPressed: boolean;
    textOne: UsePrintedText;
    textTwo: UsePrintedText;
    title: UsePrintedText;
};

export type SkipAnimation = {
    textOne: UsePrintedText;
    textTwo: UsePrintedText;
    title: UsePrintedText;
};
