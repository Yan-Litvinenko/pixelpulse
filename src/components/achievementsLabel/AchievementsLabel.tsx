import React from 'react';
import { SwitchAchieved } from '../../interfaces/interface';
import styles from './AchievementsLabel.module.scss';

interface IAchievementsLabel {
    checked?: boolean;
    id: SwitchAchieved;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    textContent: string;
    value: SwitchAchieved;
}

const AchievementsLabel = (props: IAchievementsLabel): React.JSX.Element => {
    return (
        <label className={styles.label} htmlFor={props.id}>
            <input
                checked={props.checked || false}
                className={styles.label__input}
                id={props.id}
                name="achievements"
                onChange={props.onChange}
                type="radio"
                value={props.value}
            />
            <div className={styles.label__checkbox}></div>
            <div className={styles.label__text}>{props.textContent}</div>
        </label>
    );
};

export default AchievementsLabel;
