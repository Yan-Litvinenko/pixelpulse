import React from 'react';
import styles from './Frame.module.scss';

interface IFrame {
    className?: string;
}

const Frame = (props: IFrame): React.JSX.Element => {
    return (
        <div className={props.className}>
            <FramePart className={styles.top_left} color={'#E84A4A'} path={'M1 9L1 1L9 1'} />
            <FramePart className={styles.top_right} color={'#E84A4A'} path={'M0 1L8 1L8 9'} />
            <FramePart className={styles.bottom_right} color={'#E84A4A'} path={'M8 0L8 8L1.04907e-06 8'} />
            <FramePart className={styles.bottom_left} color={'#E84A4A'} path={'M9 8L1 8L0.999999 6.99382e-07'} />
        </div>
    );
};

interface IFramePart {
    className: string;
    color: string;
    path: string;
}

function FramePart(props: IFramePart): React.JSX.Element {
    return (
        <svg
            className={props.className}
            fill="none"
            height="9"
            viewBox="0 0 9 9"
            width="9"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d={props.path} stroke={props.color} strokeWidth="2" />
        </svg>
    );
}

export default Frame;
