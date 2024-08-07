import React from 'react';
import styles from './AchievementsToggle.module.scss';
import type { IAchievementsToggle } from '../../interfaces/interface.achievements';

const AchievementsToggle = (props: IAchievementsToggle): React.JSX.Element => {
    const { checked, id, onChange, textContent, value } = props;

    return (
        <label className={styles.label} htmlFor={id}>
            <input
                checked={checked}
                className={styles.label__input}
                id={id}
                name="achievements"
                onChange={onChange}
                type="radio"
                value={value}
            />
            <div className={styles.label__checkbox}></div>
            <div className={styles.label__text}>{textContent}</div>
        </label>
    );
};

export { AchievementsToggle };
