import React from 'react';
import useRange from '../../hooks/useRange';
import styles from './Range.module.scss';

interface IRange {
    max: number;
    min: number;
    textContent: string;
}

const Range = (props: IRange): React.JSX.Element | null => {
    const progress: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
    const customThumb: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
    const [range, setRange] = useRange(0, progress, customThumb);

    return (
        <label className={styles.range}>
            {props.textContent}
            <div className={styles.range__box}>
                <input
                    className={styles.range__input}
                    max={props.max}
                    min={props.min}
                    onChange={(event) => setRange(Number(event?.target.value))}
                    type="range"
                    value={range}
                />
                <div className={styles.range__progress} ref={progress}></div>
                <div className={styles.range__custom_thumb} ref={customThumb}></div>
            </div>
        </label>
    );
};

export default Range;
