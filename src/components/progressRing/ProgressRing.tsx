import React from 'react';
import styles from './ProgressRing.module.scss';

const ProgressRing = (): React.JSX.Element => {
    const square: number = 148;
    const border: number = 14;
    const CYX: number = square / 2;
    const radius: number = square / 2 - border * 2;
    const circumference: number = 2 * Math.PI * radius;

    return (
        <svg className={styles.ring} width={square} height={square}>
            <circle
                style={{
                    strokeDashoffset: `${circumference - (60 / 100) * circumference}`,
                    strokeDasharray: `${circumference} ${circumference}`,
                }}
                className={styles.ring__circle}
                stroke="#E84A4A"
                strokeWidth={border}
                cy={CYX}
                cx={CYX}
                r={radius}
                fill="transparent"
            />
        </svg>
    );
};

export default ProgressRing;
