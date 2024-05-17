import React from 'react';
import useRange from '../../hooks/useRange';
import styles from './Range.module.scss';

interface IRange {
    changeSettingValue: (
        event: React.ChangeEvent<HTMLInputElement>,
        variableName: 'hue' | 'saturation' | 'lightness' | 'size',
    ) => void;
    color?: 'hue' | 'saturation' | 'lightness';
    inputTarget: 'color' | 'size';
    max: number;
    min: number;
    textContent: string;
    initValue: number;
}

const Range = (props: IRange): React.JSX.Element | null => {
    const progress: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
    const customThumb: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);

    const [rangeElement, setRangeElement] = useRange(props.initValue, progress, customThumb);

    return (
        <label className={styles.range}>
            {props.textContent}
            <div className={styles.range__box}>
                <input
                    className={styles.range__input}
                    max={props.max}
                    min={props.min}
                    onChange={(event) => {
                        setRangeElement(Number(event?.target.value));

                        if (props.inputTarget === 'color') {
                            props.changeSettingValue(event, props.color || 'hue');
                        }

                        if (props.inputTarget === 'size') {
                            props.changeSettingValue(event, 'size');
                        }
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
