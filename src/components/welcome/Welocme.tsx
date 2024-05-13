import React from 'react';
import usePrintedText from '../../hooks/usePrintedText';
import { ContextApp } from '../app/App';
import Button from '../button/Button';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
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

    const [skipStatus, setSkipStatus] = React.useState<boolean>(false);

    const delayText_1: number = textForPrint.title.length * 50;
    const delayText_2: number = (textForPrint.title.length + textForPrint.text_1.length) * 50;

    const title = usePrintedText(textForPrint.title, 0);
    const text_1 = usePrintedText(textForPrint.text_1, delayText_1);
    const text_2 = usePrintedText(textForPrint.text_2, delayText_2);

    const skip = () => {
        [...title.timers, ...text_1.timers, ...text_2.timers].forEach((timer) => clearTimeout(timer));
        setSkipStatus(true);
    };

    const handleButton = (): void => contextApp.setPage('beginning');
    const textElementWithAnimation = (currentText: string, condition: boolean) => {
        return `${currentText} ${condition ? '|' : ''}`;
    };

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
                                : textElementWithAnimation(text_1.text, !text_1.animationEnd && title.animationEnd)
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
                                : textElementWithAnimation(text_2.text, !text_2.animationEnd && text_1.animationEnd)
                        }
                    />
                </div>

                <Button
                    className={`${styles.welcome__btn} ${skipStatus || text_2.animationEnd ? '' : styles.hidden}`}
                    delayEvent={false}
                    handleButton={handleButton}
                    textContent={'Enter the system'}
                    type="button"
                />

                <button
                    className={`${styles.skip} ${skipStatus || text_1.animationEnd ? styles.hidden : ''}`}
                    onClick={skip}
                >
                    skip animation<span className={styles.skip__quotes}>&#xBB;</span>
                </button>
            </div>
        </div>
    );
};

export default Welcome;
