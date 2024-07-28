import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext';
import { usePrintedText } from '../../hooks/usePrintedText';
import audioKeyboardPress from '../../assets/audio/pressKeyboard.mp3';
import styles from './Welcome.module.scss';

const audioKeyboard = new Audio(audioKeyboardPress);
const textForPrint: Record<string, string> = {
    title: 'Welcome to by personal website',
    text_1: 'I have created this website to feel like a game/sci-fi interface. All text inside tries to reflect this.',
    text_2: 'You will find ‘achievements’ or ‘quests’ that show the progress in my professional life and are related to what I am working on.',
};

const Welcome = (): React.JSX.Element => {
    const { handleSoundClick, sounds } = useAppContext();

    const skipStatus = React.useRef(false);
    const isPlayedAudioKeyboard = React.useRef(false);

    const delayTextOne: number = textForPrint.title.length * 50;
    const delayTextTwo: number = (textForPrint.title.length + textForPrint.text_1.length) * 50;

    const title = usePrintedText(textForPrint.title, 0);
    const textOne = usePrintedText(textForPrint.text_1, delayTextOne);
    const textTwo = usePrintedText(textForPrint.text_2, delayTextTwo);

    const setInTrueStatusPlayed = (): boolean => (isPlayedAudioKeyboard.current = true);
    const setSkipStatus = (): boolean => (skipStatus.current = true);
    const setAnimationText = () => {
        title.setAnimationText(textForPrint.title);
        textOne.setAnimationText(textForPrint.text_1);
        textTwo.setAnimationText(textForPrint.text_2);
    };

    const skip = (): void => {
        [...title.timers, ...textOne.timers, ...textTwo.timers].forEach((timer) => clearTimeout(timer));
        audioKeyboard.pause();
        setAnimationText();
        setSkipStatus();
        handleSoundClick();
    };

    const textElementWithAnimation = (currentText: string, condition: boolean): string => {
        return `${currentText} ${condition ? '|' : ''}`;
    };

    const handleAudioKeyboard = (): void => {
        if (sounds && !isPlayedAudioKeyboard.current && !skipStatus.current) {
            setInTrueStatusPlayed();
            audioKeyboard.play();
        }
    };

    React.useEffect(() => {
        const changeStatus = setTimeout(() => audioKeyboard.pause(), 13000);
        window.addEventListener('click', handleAudioKeyboard);

        return () => {
            clearTimeout(changeStatus);
            window.removeEventListener('click', handleAudioKeyboard);
            audioKeyboard.pause();
        };
    }, []);

    return (
        <div className={styles.welcome}>
            <h2 className={styles.welcome__greeting}>HI!</h2>
            <div className={styles.welcome__content}>
                <div className={styles.welcome__item}>
                    <h1 className={`${styles.welcome__title} ${styles.hidden}`}>{textForPrint.title}</h1>
                    <h1 className={styles.welcome__title}>
                        {skipStatus.current
                            ? textForPrint.title
                            : textElementWithAnimation(title.animationText, !title.animationEnd)}
                    </h1>
                </div>

                <div className={styles.welcome__item}>
                    <p className={`${styles.welcome__text} ${styles.hidden}`}>{textForPrint.text_1}</p>
                    <p className={styles.welcome__text}>
                        {skipStatus.current
                            ? textForPrint.text_1
                            : textElementWithAnimation(
                                  textOne.animationText,
                                  !textOne.animationEnd && title.animationEnd,
                              )}
                    </p>
                </div>

                <div className={styles.welcome__item}>
                    <p className={`${styles.welcome__text} ${styles.hidden}`}>{textForPrint.text_2}</p>
                    <p className={styles.welcome__text}>
                        {skipStatus.current
                            ? textForPrint.text_2
                            : textElementWithAnimation(
                                  textTwo.animationText,
                                  !textTwo.animationEnd && textOne.animationEnd,
                              )}
                    </p>
                </div>

                <Link
                    className={`${styles.welcome__btn} ${skipStatus.current || textTwo.animationEnd ? '' : styles.hidden}`}
                    onClick={handleSoundClick}
                    to="/beginning"
                >
                    Enter the system
                </Link>

                <button
                    className={`${styles.skip} ${skipStatus.current || textOne.animationEnd ? styles.hidden : ''}`}
                    onClick={skip}
                >
                    skip animation<span className={styles.skip__quotes}>&#xBB;</span>
                </button>
            </div>
        </div>
    );
};

export { Welcome };
