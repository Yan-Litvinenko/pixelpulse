import React from 'react';
import styles from './AchievementsLabel.module.scss';

interface IAchievementsLabel {
    id: string;
    textContent: string;
}

const AchievementsLabel = (props: IAchievementsLabel): React.JSX.Element => {
    return (
        <label className={styles.label} htmlFor={props.id}>
            <input className={styles.label__input} type="radio" name="achievements" id={props.id} />
            <div className={styles.label__checkbox}></div>
            <div className={styles.label__text}>{props.textContent}</div>
        </label>
    );
};

export default AchievementsLabel;
