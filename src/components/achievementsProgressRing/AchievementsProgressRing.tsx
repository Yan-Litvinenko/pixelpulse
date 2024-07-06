import React from 'react';
import { IAchievementsProgressRing } from '../../interfaces/interface.achievements';
import styles from './AchievementsProgressRing.module.scss';

const AchievementsProgressRing = ({ percent }: IAchievementsProgressRing): React.JSX.Element => {
    const square: number = 148;
    const border: number = 14;
    const CYX: number = square / 2;
    const radius: number = square / 2 - border * 2;
    const circumference: number = 2 * Math.PI * radius;

    return (
        <svg className={styles.ring} width={square} height={square} viewBox={`0 0 ${square} ${square}`}>
            <circle
                style={{
                    strokeDashoffset: `${circumference - (percent / 100) * circumference}`,
                    strokeDasharray: `${circumference} ${circumference}`,
                }}
                className={styles.ring__circle}
                stroke="current-color"
                strokeWidth={border}
                cy={CYX}
                cx={CYX}
                r={radius}
                fill="transparent"
            />
        </svg>
    );
};

export default AchievementsProgressRing;
