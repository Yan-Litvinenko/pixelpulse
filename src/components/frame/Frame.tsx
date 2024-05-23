import React from 'react';
import styles from './Frame.module.scss';

interface IFrame {
    className?: string;
}

const Frame = ({ className }: IFrame): React.JSX.Element => {
    return (
        <div className={className}>
            <svg
                className={styles.top_left}
                fill="none"
                height="0.5625rem"
                viewBox="0 0 9 9"
                width="0.5625rem"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d={'M1 9L1 1L9 1'} stroke={'current-color'} strokeWidth="2" />
            </svg>

            <svg
                className={styles.top_right}
                fill="none"
                height="0.5625rem"
                viewBox="0 0 9 9"
                width="0.5625rem"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d={'M0 1L8 1L8 9'} stroke={'current-color'} strokeWidth="2" />
            </svg>

            <svg
                className={styles.bottom_right}
                fill="none"
                height="0.5625rem"
                viewBox="0 0 9 9"
                width="0.5625rem"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d={'M8 0L8 8L1.04907e-06 8'} stroke={'current-color'} strokeWidth="2" />
            </svg>

            <svg
                className={styles.bottom_left}
                fill="none"
                height="0.5625rem"
                viewBox="0 0 9 9"
                width="0.5625rem"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d={'M9 8L1 8L0.999999 6.99382e-07'} stroke={'current-color'} strokeWidth="2" />
            </svg>
        </div>
    );
};

export default Frame;
