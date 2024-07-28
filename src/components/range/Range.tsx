import React from 'react';
import { IRange } from '../../interfaces/interface.component';
import { useRange } from '../../hooks/useRange';
import styles from './Range.module.scss';

const Range = (props: IRange): React.JSX.Element => {
    const { initValue, changeSettingValue, textContent, min, max, inputTarget } = props;

    const progress: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
    const customThumb: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);

    const [rangeElement, setRangeElement] = useRange(initValue, progress, customThumb);

    React.useEffect(() => {
        setRangeElement(initValue);
    }, [initValue]);

    return (
        <label className={styles.range}>
            {textContent}
            <div className={styles.range__box}>
                <input
                    className={styles.range__input}
                    max={max}
                    min={min}
                    onChange={(event) => {
                        setRangeElement(Number(event?.target.value));

                        if (inputTarget === 'color') changeSettingValue(event, props.color || 'hue');
                        if (inputTarget === 'size') changeSettingValue(event, 'size');
                    }}
                    type="range"
                    value={rangeElement}
                />
                <div className={styles.range__progress} ref={progress}></div>
                <div className={styles.range__custom_thumb} ref={customThumb}></div>
            </div>
        </label>
    );
};

export default Range;
