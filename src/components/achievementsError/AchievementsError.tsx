import React from 'react';
import styles from './AchievementsError.module.scss';
import { modalOpenHandler } from '../../store/slices/modalSlice';
import { soundsModalTrigger } from '../../store/slices/soundsSlice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';

const AchievementsError = (): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <ul className={styles.error} data-testid="achievements-list-error">
            <li className={styles.error__item}>
                Check your internet connection. Ensure that you are connected to a stable network.
            </li>
            <li className={styles.error__item}>
                Try refreshing the page by pressing Ctrl+R or Command+R on your keyboard.
            </li>
            <li className={styles.error__item}>If you are using a VPN, try disabling it and reloading the page.</li>
            <li className={styles.error__item}>Clear your browser's cache and cookies, then try reloading the page.</li>
            <li className={styles.error__item}>
                If the error persists, please write to{' '}
                <span
                    onClick={() => {
                        dispatch(soundsModalTrigger());
                        dispatch(modalOpenHandler({ key: 'social' }));
                    }}
                    data-testid="achievements-modal-error"
                >
                    me
                </span>
            </li>
        </ul>
    );
};

export { AchievementsError };
