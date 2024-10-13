'use client';

import React from 'react';
import Link from 'next/link';
import skipAnimation from '@/helpers/welcome/skipAnimation';
import textWithPipeAnimated from '@/helpers/welcome/textElementWithAnimation';
import usePrintedText from '@/hooks/usePrintedText';
import styles from '@/styles/components/welcome/Welcome.module.scss';
import { soundsSelector } from '@/redux/selectors';
import { soundsClickTrigger } from '@/redux/slice/soundsSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { AnimatedText, UsePrintedText } from '@/interface/welcome/Welcome.interface';

export default function WelcomeContent(props: AnimatedText): React.JSX.Element {
    const dispatch = useDispatch();
    const sounds = useSelector(soundsSelector);

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

    const keyboardSoundInteraction = (event: Event) => {
        if (event.target === skipButton.current) return;

        if (sounds.soundsState) {
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

    return (
        <section className={styles.welcome__content}>
            <div className={styles.welcome__item}>
                <div className={`${styles.welcome__title} ${styles.hidden}`}>{props.title}</div>
                <h1 className={styles.welcome__title}>
                    {skipStatus ? props.title : textWithPipeAnimated(title.animationText, !title.animationEnd)}
                </h1>
            </div>

            <div className={styles.welcome__item}>
                <div className={`${styles.welcome__text} ${styles.hidden}`}>{props.text_1}</div>
                <p className={styles.welcome__text}>
                    {skipStatus
                        ? props.text_1
                        : textWithPipeAnimated(textOne.animationText, !textOne.animationEnd && title.animationEnd)}
                </p>
            </div>

            <div className={styles.welcome__item}>
                <div className={`${styles.welcome__text} ${styles.hidden}`}>{props.text_2}</div>
                <p className={styles.welcome__text}>
                    {skipStatus
                        ? props.text_2
                        : textWithPipeAnimated(textTwo.animationText, !textTwo.animationEnd && textOne.animationEnd)}
                </p>
            </div>
            <Link
                className={`${styles.welcome__btn} ${skipStatus || textTwo.animationEnd ? '' : styles.hidden}`}
                onClick={() => dispatch(soundsClickTrigger())}
                href="/beginning"
            >
                Enter the system
            </Link>

            <button
                className={`${styles.skip} ${skipStatus || textOne.animationEnd ? styles.hidden : ''}`}
                onClick={() => {
                    dispatch(soundsClickTrigger());
                    skipAnimation({ title, textOne, textTwo });
                    setSkipStatus(true);
                }}
                ref={skipButton}
            >
                skip animation
                <span className={styles.skip__quotes}>&#xBB;</span>
            </button>
        </section>
    );
}
