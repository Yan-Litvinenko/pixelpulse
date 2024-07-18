import React from 'react';
import usePrintedText from '../../hooks/usePrintedText';
import { ContextApp } from '../app/App';
import { Link } from 'react-router-dom';
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

    const { handleSoundClick } = contextApp;

    const audioKeyboard = React.useRef(new Audio(audioKeyboardPress));

    const [skipStatus, setSkipStatus] = React.useState<boolean>(false);
    const [audioKeyboardStatus, setAudioKeyboardStatus] = React.useState(contextApp.sounds ? true : false);

    const delayTextOne: number = textForPrint.title.length * 50;
    const delayTextTwo: number = (textForPrint.title.length + textForPrint.text_1.length) * 50;

    const title = usePrintedText(textForPrint.title, 0);
    const textOne = usePrintedText(textForPrint.text_1, delayTextOne);
    const textTwo = usePrintedText(textForPrint.text_2, delayTextTwo);

    const skip = (): void => {
        [...title.timers, ...textOne.timers, ...textTwo.timers].forEach((timer) => clearTimeout(timer));
        setSkipStatus(true);
        setAudioKeyboardStatus(false);
        audioKeyboard.current.pause();
        handleSoundClick();
    };

    const textElementWithAnimation = (currentText: string, condition: boolean): string => {
        return `${currentText} ${condition ? '|' : ''}`;
    };

    const handleAudioKeyboard = (): void => {
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
            <h2 className={styles.welcome__greeting}>HI!</h2>
            <div className={styles.welcome__content}>
                <div className={styles.welcome__item}>
                    <h1 className={`${styles.welcome__title} ${styles.hidden}`}>{textForPrint.title}</h1>
                    <h1 className={styles.welcome__title}>
                        {skipStatus ? textForPrint.title : textElementWithAnimation(title.text, !title.animationEnd)}
                    </h1>
                </div>

                <div className={styles.welcome__item}>
                    <p className={`${styles.welcome__text} ${styles.hidden}`}>{textForPrint.text_1}</p>
                    <p className={styles.welcome__text}>
                        {skipStatus
                            ? textForPrint.text_1
                            : textElementWithAnimation(textOne.text, !textOne.animationEnd && title.animationEnd)}
                    </p>
                </div>

                <div className={styles.welcome__item}>
                    <p className={`${styles.welcome__text} ${styles.hidden}`}>{textForPrint.text_2}</p>
                    <p className={styles.welcome__text}>
                        {skipStatus
                            ? textForPrint.text_2
                            : textElementWithAnimation(textTwo.text, !textTwo.animationEnd && textOne.animationEnd)}
                    </p>
                </div>

                <Link
                    className={`${styles.welcome__btn} ${skipStatus || textTwo.animationEnd ? '' : styles.hidden}`}
                    onClick={() => handleSoundClick()}
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
