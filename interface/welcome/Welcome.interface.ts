type Key = 'title' | 'text_1' | 'text_2';

export type AnimatedText = { [k in Key]: string };

export type UsePrintedText = {
    animationText: string;
    setAnimationText: React.Dispatch<React.SetStateAction<string>>;
    animationEnd: boolean;
    timers: NodeJS.Timeout[];
    textForPrint: string;
};

export type SkipAnimation = {
    title: UsePrintedText;
    textOne: UsePrintedText;
    textTwo: UsePrintedText;
};
