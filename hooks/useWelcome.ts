import React from 'react';
import usePrintedText from './usePrintedText';
import { useSelector } from 'react-redux';
import { soundsSelector } from '@/redux/selectors';
import type { AnimatedText, UsePrintedText, UseWelcome } from '@/interface/welcome/Welcome.interface';

export default function useWelcome(props: AnimatedText): UseWelcome {
    const soundsState = useSelector(soundsSelector).soundsState;

    const PRINT_SPEED: number = 50;
    const animationEnd = React.useRef<boolean>(false);
    const skipButton = React.useRef<HTMLButtonElement | null>(null);
    const keyboardSound = React.useRef<HTMLAudioElement | null>(null);
    const [skipPressed, setSkipPressed] = React.useState<boolean>(false);

    const title: UsePrintedText = usePrintedText(props.title, 0);
    const textOne: UsePrintedText = usePrintedText(props.text_1, props.title.length * PRINT_SPEED);
    const textTwo: UsePrintedText = usePrintedText(
        props.text_2,
        (props.title.length + props.text_1.length) * PRINT_SPEED,
    );

    const keyboardSoundInteraction = (event: Event): void => {
        if (event.target === skipButton.current) return;

        if (soundsState) {
            if (!skipPressed && !textTwo.animationEnd && !animationEnd.current) {
                keyboardSound.current = new Audio('assets/audio/pressKeyboard.mp3');
                keyboardSound.current.play();
            }
        }
    };

    React.useEffect(() => {
        setTimeout(
            () => {
                animationEnd.current = true;
            },
            (props.title.length + props.text_1.length) * PRINT_SPEED,
        );
        window.addEventListener('click', keyboardSoundInteraction, { once: true });
        return () => window.removeEventListener('click', keyboardSoundInteraction);
    }, []);

    React.useEffect(() => {
        if (keyboardSound.current) {
            if (skipPressed || textTwo.animationEnd) {
                keyboardSound.current.pause();
            }
        }
    }, [textTwo.animationEnd, skipPressed]);

    return { skipPressed, title, textOne, textTwo, skipButton, setSkipPressed };
}
