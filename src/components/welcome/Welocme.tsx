import React from 'react';
import { IAppContext } from '../../interfaces/interfaces';
import { ContextApp } from '../app/App';
import { useContext } from 'react';
import Button from '../button/Button';
import DecorativeCorner from '../decorativeCorner/DecorativeCorner';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import styles from './Welcome.module.scss';

const Welcome = (): React.JSX.Element => {
    const contextApp = useContext<IAppContext | undefined>(ContextApp);
    const texts: Record<string, string> = {
        first: 'I have created this website to feel like a game/sci-fi interface. All text inside tries to reflect this.',
        second: 'You will find ‘achievements’ or ‘quests’ that show the progress in my professional life and are related to what I am working on.',
        mobile: 'I continually update and improve this website to reflect my latest achievements and current projects.',
    };

    return (
        <div className={styles.welcome}>
            <DecorativeCorner />
            <Heading className={styles.welcome__greeting} level={'2'} textContent="HI!" />
            <div className={styles.welcome__content}>
                <Heading className={styles.welcome__title} level={'1'} textContent="Welcome to by personal website" />
                <Paragraph className={styles.welcome__text} textContent={texts.first} />
                <Paragraph className={styles.welcome__text_mobile} textContent={texts.mobile} />
                <Paragraph className={styles.welcome__text} textContent={texts.second} />
                <Button
                    className={styles.welcome__btn}
                    textContent={'Enter the system'}
                    onClick={() => contextApp?.setPage('beginning')}
                />
            </div>
        </div>
    );
};

export default Welcome;
