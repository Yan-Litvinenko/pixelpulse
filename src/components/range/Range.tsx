import React from 'react';
import styles from './Range.module.scss';
import { useRange } from '../../hooks/useRange';
import type { IRange } from '../../interfaces/interface.component';

const Range = (props: IRange): React.JSX.Element => {
    const { inputValue, changeSettingValue, textContent, min, max, inputTarget } = props;

    const progress: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
    const customThumb: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);

    const setRefProgress = (value: number): void => {
        if (progress.current) progress.current.style.width = value + '%';
    };
    const setRefThumb = (value: number): void => {
        if (customThumb.current) {
            customThumb.current.style.left = value + '%';
            customThumb.current.style.transform = `translateX(-${value}%)`;
        }
    };

    const [rangeValue, setRangeValue] = useRange(inputValue, setRefProgress, setRefThumb);

    const handleRange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setRangeValue(Number(event.target.value));

        if (inputTarget === 'color') changeSettingValue(event, 'hue');
        if (inputTarget === 'size') changeSettingValue(event, 'size');
    };

    return (
        <label className={styles.range}>
            {textContent}
            <div className={styles.range__box}>
                <input
                    className={styles.range__input}
                    max={max}
                    min={min}
                    onChange={handleRange}
                    type="range"
                    value={rangeValue}
                />
                <div className={styles.range__progress} ref={progress}></div>
                <div className={styles.range__custom_thumb} ref={customThumb}></div>
            </div>
        </label>
    );
};

export { Range };
