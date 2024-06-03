import React from 'react';
import usePrintedText from '../../hooks/usePrintedText';
import { ContextApp } from '../app/App';
import { Link } from 'react-router-dom';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import audioKeyboardPress from '../../assets/audio/pressKeyboard.mp3';
import { IAppContext } from '../../interfaces/interface';
import styles from './Welcome.module.scss';

const textForPrint: Record<string, string> = {
    title: 'Welcome to by personal website',
    text_1: 'I have created this website to feel like a game/sci-fi interface. All text inside tries to reflect this.',
    text_2: 'You will find ‘achievements’ or ‘quests’ that show the progress in my professional life and are related to what I am working on.',
};

const Welcome = (): React.JSX.Element => {
    const contextApp = React.useContext<IAppContext | undefined>(ContextApp);

    if (!contextApp) return <></>;

    const audioKeyboard = React.useRef(new Audio(audioKeyboardPress));

    const [skipStatus, setSkipStatus] = React.useState<boolean>(false);
    const [audioKeyboardStatus, setAudioKeyboardStatus] = React.useState(contextApp.sounds ? true : false);

    const delayTextOne: number = textForPrint.title.length * 50;
    const delayTextTwo: number = (textForPrint.title.length + textForPrint.text_1.length) * 50;

    const title = usePrintedText(textForPrint.title, 0);
    const textOne = usePrintedText(textForPrint.text_1, delayTextOne);
    const textTwo = usePrintedText(textForPrint.text_2, delayTextTwo);

    const skip = () => {
        [...title.timers, ...textOne.timers, ...textTwo.timers].forEach((timer) => clearTimeout(timer));
        setSkipStatus(true);
        setAudioKeyboardStatus(false);
        audioKeyboard.current.pause();
        contextApp.handleSoundClick();
    };

    const textElementWithAnimation = (currentText: string, condition: boolean) => {
        return `${currentText} ${condition ? '|' : ''}`;
    };

    const handleAudioKeyboard = () => {
        if (audioKeyboardStatus) {
            audioKeyboard.current.play();
        }
    };

    React.useEffect(() => {
        window.addEventListener('click', handleAudioKeyboard);

        return () => {
            window.removeEventListener('click', handleAudioKeyboard);
            audioKeyboard.current.pause();
        };
    }, [audioKeyboardStatus]);

    React.useEffect(() => {
        const changeStatus = setTimeout(() => {
            setAudioKeyboardStatus(false);
        }, 13000);

        return () => clearTimeout(changeStatus);
    }, []);

    return (
        <div className={styles.welcome}>
            <Heading className={styles.welcome__greeting} level={'2'} textContent="HI!" />
            <div className={styles.welcome__content}>
                <div className={styles.welcome__item}>
                    <Heading
                        className={`${styles.welcome__title} ${styles.hidden}`}
                        level={'1'}
                        textContent={textForPrint.title}
                    />
                    <Heading
                        className={styles.welcome__title}
                        level={'1'}
                        textContent={
                            skipStatus ? textForPrint.title : textElementWithAnimation(title.text, !title.animationEnd)
                        }
                    />
                </div>

                <div className={styles.welcome__item}>
                    <Paragraph
                        className={`${styles.welcome__text} ${styles.hidden}`}
                        textContent={textForPrint.text_1}
                    />
                    <Paragraph
                        className={styles.welcome__text}
                        textContent={
                            skipStatus
                                ? textForPrint.text_1
                                : textElementWithAnimation(textOne.text, !textOne.animationEnd && title.animationEnd)
                        }
                    />
                </div>

                <div className={styles.welcome__item}>
                    <Paragraph
                        className={`${styles.welcome__text} ${styles.hidden}`}
                        textContent={textForPrint.text_2}
                    />
                    <Paragraph
                        className={styles.welcome__text}
                        textContent={
                            skipStatus
                                ? textForPrint.text_2
                                : textElementWithAnimation(textTwo.text, !textTwo.animationEnd && textOne.animationEnd)
                        }
                    />
                </div>

                <Link
                    className={`${styles.welcome__btn} ${skipStatus || textTwo.animationEnd ? '' : styles.hidden}`}
                    onClick={() => contextApp.handleSoundClick()}
                    to="/beginning"
                >
                    Enter the system
                </Link>

                <button
                    className={`${styles.skip} ${skipStatus || textOne.animationEnd ? styles.hidden : ''}`}
                    onClick={skip}
                >
                    skip animation<span className={styles.skip__quotes}>&#xBB;</span>
                </button>
            </div>
        </div>
    );
};

export default Welcome;
