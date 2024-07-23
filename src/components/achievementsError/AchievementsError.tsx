import React from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import styles from './AchievementsError.module.scss';

const AchievementsError = (): React.JSX.Element => {
    const { setSocial } = useAppContext();

    const contactWithTheDeveloper = () => setSocial(true);

    return (
        <ul className={styles.error}>
            <li className={styles.error__item}>
                Check your internet connection. Ensure that you are connected to a stable network.
            </li>
            <li className={styles.error__item}>
                Try refreshing the page by pressing Ctrl+R or Command+R on your keyboard.
            </li>
            <li className={styles.error__item}>If you are using a VPN, try disabling it and reloading the page.</li>
            <li className={styles.error__item}>Clear your browser's cache and cookies, then try reloading the page.</li>
            <li className={styles.error__item}>
                If the error persists, please write to <span onClick={contactWithTheDeveloper}>me</span>
            </li>
        </ul>
    );
};

export { AchievementsError };
