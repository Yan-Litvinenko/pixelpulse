import React from 'react';
import { AchievementsProgressRing } from '../achievementsProgressRing/AchievementsProgressRing';
import { AchievementsToggle } from '../achievementsToggle/AchievementsToggle';
import { ToggleStatus } from '../../interfaces/interface.achievements';
import { useAppContext } from '../../hooks/useAppContext';
import handleOpenModal from '../../utils/handleOpenModal';
import styles from './AchievementsError.module.scss';

const AchievementsError = (): React.JSX.Element => {
    const { handleSoundModal, handleSoundClick, setChallenge, setSocial } = useAppContext();
    const [filterStatus, setFilterStatus] = React.useState<ToggleStatus>('all');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFilterStatus(event.target.value as ToggleStatus);
        handleSoundClick();
    };

    const contactWithTheDeveloper = () => setSocial(true);

    return (
        <main className={styles.achievements}>
            <h1 className={styles.achievements__title}>Error loading achievements</h1>

            <div className={styles.achievements__content}>
                <div className={styles.progress}>
                    <div className={styles.progress__inner}>
                        <AchievementsProgressRing percent={100} />
                        <span className={styles.progress__statistic}>0/0</span>
                        <span className={styles.progress__name}>progress</span>
                    </div>

                    <p className={styles.progress__text}>
                        I have created a set of achievements for myself and I use this page to track them.
                    </p>
                    <p className={styles.progress__text}>
                        If you want to give me a challenge and rate it, please feel free to submit it with the button
                        below!
                    </p>

                    <button
                        className={styles.progress__button}
                        onClick={() => {
                            handleOpenModal(setChallenge);
                            handleSoundModal();
                        }}
                        type="button"
                    >
                        Challenge me
                    </button>
                </div>

                <ul className={styles.error}>
                    <li className={styles.error__item}>
                        Check your internet connection. Ensure that you are connected to a stable network.
                    </li>
                    <li className={styles.error__item}>
                        Try refreshing the page by pressing Ctrl+R or Command+R on your keyboard.
                    </li>
                    <li className={styles.error__item}>
                        If you are using a VPN, try disabling it and reloading the page.
                    </li>
                    <li className={styles.error__item}>
                        Clear your browser's cache and cookies, then try reloading the page.
                    </li>
                    <li className={styles.error__item}>
                        If the error persists, please write to <span onClick={contactWithTheDeveloper}>me</span>
                    </li>
                </ul>

                <div className={styles.switchers}>
                    <AchievementsToggle
                        checked={filterStatus === 'all'}
                        id="all"
                        onChange={handleChange}
                        textContent="all"
                        value={'all'}
                    />
                    <AchievementsToggle
                        checked={filterStatus === 'achieved'}
                        id="achieved"
                        onChange={handleChange}
                        textContent="achieved"
                        value={'achieved'}
                    />
                    <AchievementsToggle
                        checked={filterStatus === 'inProgress'}
                        id="inProgress"
                        onChange={handleChange}
                        textContent="in progress"
                        value={'inProgress'}
                    />
                </div>
            </div>
        </main>
    );
};

export { AchievementsError };
