import React from 'react';
import usePrintedText from './usePrintedText';
import { useSelector } from 'react-redux';
import { soundsSelector } from '@/redux/selectors';
import type { UseWelcome } from '@/interface/hooks.interface';
import type { AnimatedText, UsePrintedText } from '@/interface/welcome/Welcome.interface';

export default function useWelcome(props: AnimatedText): UseWelcome {
    const { soundsState } = useSelector(soundsSelector);

    const printSpeed: number = 50;
    const keyboardSound = React.useRef<HTMLAudioElement | null>(null);
    const skipButton = React.useRef<null | HTMLButtonElement>(null);
    const [skipStatus, setSkipStatus] = React.useState<boolean>(false);
    const animationEnd = React.useRef<boolean>(false);

    const title: UsePrintedText = usePrintedText(props.title, 0);
    const textOne: UsePrintedText = usePrintedText(props.text_1, props.title.length * printSpeed);
    const textTwo: UsePrintedText = usePrintedText(
        props.text_2,
        (props.title.length + props.text_1.length) * printSpeed,
    );

    const keyboardSoundInteraction = (event: Event): void => {
        if (event.target === skipButton.current) return;

        if (soundsState) {
            if (!skipStatus && !textTwo.animationEnd && !animationEnd.current) {
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
            (props.title.length + props.text_1.length) * printSpeed,
        );
        window.addEventListener('click', keyboardSoundInteraction, { once: true });
        return () => window.removeEventListener('click', keyboardSoundInteraction);
    }, []);

    React.useEffect(() => {
        if (keyboardSound.current) {
            if (skipStatus || textTwo.animationEnd) {
                keyboardSound.current.pause();
            }
        }
    }, [textTwo.animationEnd, skipStatus]);

    return { skipStatus, title, textOne, textTwo, skipButton, setSkipStatus };
}
