import React from 'react';
import useLogsUpdate from '../../hooks/useLogsUpdate';
import Button from '../button/Button';
import Heading from '../heading/Heading';
import { nanoid } from 'nanoid';
import styles from './LogsUpdate.module.scss';

const update: Record<string, string>[] = [
    {
        title: 'project update',
        text: 'The development team has been working tirelessly on the latest iteration of the project. Significant progress has been made in the areas of neural interface integration, machine learning algorithms, and quantum computing. of neural interface integration, machine learning algorithms, and quantum computing',
    },
    {
        title: 'Challenges',
        text: ' system crashes, hardware malfunctions, and unanticipated compatibility issues',
    },
    {
        title: 'NEXT STEPS',
        text: 'The development team has been working tirelessly on the latest iteration of the project. Significant progress has been made in the areas of neural interface integration, machine learning algorithms, and quantum computing.',
    },
    {
        title: 'CONCLUSION',
        text: 'The development of advanced neural interfaces and machine learning algorithms',
    },
];

const LogsUpdate = (): React.JSX.Element => {
    const [expandStates, clippedIndexes, setExpandStates, textRefs] = useLogsUpdate(update, styles.element__text_clip);
    const handleExpand = React.useCallback((index: number): void => {
        return setExpandStates((prevStates) => {
            const newStates: boolean[] = [...prevStates];
            newStates[index] = !prevStates[index];
            return newStates;
        });
    }, []);

    return (
        <div className={styles.update}>
            {update.map((element, index) => {
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
                                delayEvent={false}
                                handleButton={() => handleExpand(index)}
                                textContent={expandStates[index] ? '-expand' : '+expand'}
                                type="button"
                            />
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
};

export default LogsUpdate;
