import React from 'react';
import Button from '../button/Button';
import Heading from '../heading/Heading';
import { nanoid } from 'nanoid';
import updateData from '../../assets/json/update.json';
import styles from './LogsUpdate.module.scss';

const LogsUpdate = (): React.JSX.Element => {
    const [expandStates, setExpandStates] = React.useState<boolean[]>(updateData.map(() => false));
    const [clippedIndexes, setClippedIndexes] = React.useState<number[]>([]);
    const textRefs = React.useRef<(HTMLParagraphElement | null)[]>([]);

    const handleExpand = (index: number): void => {
        if (expandStates[index]) {
            textRefs.current[index]?.classList.add(styles.element__text_clip);
            setExpandStates((prev) => [...prev, (prev[index] = false)]);
        } else {
            textRefs.current[index]?.classList.remove(styles.element__text_clip);
            setExpandStates((prev) => [...prev, (prev[index] = true)]);
        }

        // if (expandStates[index]) {
        //     // setExpandStates((prev) => [...prev.map((item, i) => (i === index ? !item : item))]);
        // } else {
        //     textRefs.current[index]?.classList.add(styles.element__text_clip);
        //     // setExpandStates((prev) => [...prev.map((item, i) => (i === index ? !item : item))]);
        // }
    };

    const handleResize = (): void => {
        const newClippedIndexes: number[] = [];

        textRefs.current.forEach((textElement, index) => {
            if (textElement) {
                textElement.classList.remove(styles.element__text_clip);
                const rect: DOMRect = textElement.getBoundingClientRect();

                if (rect.height > 61) {
                    newClippedIndexes.push(index);
                }
            }
        });

        setClippedIndexes(newClippedIndexes);
    };

    React.useEffect(() => {
        const observer: ResizeObserver = new ResizeObserver(handleResize);

        window.addEventListener('resize', handleResize);

        textRefs.current.forEach((textElement) => {
            if (textElement) {
                observer.observe(textElement);
            }
        });

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
            observer.disconnect();
        };
    }, []);

    return (
        <div className={styles.update}>
            {updateData.map((element, index) => {
                return (
                    <div className={styles.element} key={nanoid()}>
                        <div className={styles.border}></div>
                        <Heading className={styles.element__title} level="3" textContent={element.title} />
                        <p
                            className={`${styles.element__text} ${expandStates[index] ? '' : styles.element__text_clip}`}
                            ref={(el) => (textRefs.current[index] = el)}
                        >
                            {element.text}
                        </p>
                        {clippedIndexes.includes(index) ? (
                            <Button
                                className={styles.element__expend}
                                onClick={() => handleExpand(index)}
                                textContent={expandStates[index] ? '-expand' : '+expand'}
                            />
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
};

export default LogsUpdate;
