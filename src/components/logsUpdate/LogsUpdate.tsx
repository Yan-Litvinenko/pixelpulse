import React from 'react';
import { nanoid } from 'nanoid';
import { useAppContext } from '../../hooks/useAppContext';
import { useLogsUpdate } from '../../hooks/useLogsUpdate';
import styles from './LogsUpdate.module.scss';

const update: Record<string, string>[] = [
    {
        title: 'project update',
        text: 'I continue to actively work to improve quality and expand capabilities. I constantly working to improve code readability/structure/performance.',
    },
    {
        title: 'Challenges',
        text: 'Maximum test coverage of the application, as well as integration with Redux.',
    },
    {
        title: 'Next steps',
        text: 'Creation of 3D animations and mini-games. Adding more flexible settings. Creating and adding pet projects that will tell about my skills.',
    },
    {
        title: 'Conclusion',
        text: 'In conclusion, i would like to say that my project represents my passion and diligence. I am excited to see the impact it will have and am committed to continuing to strive for excellence.',
    },
];

const LogsUpdate = (): React.JSX.Element => {
    const { handleSoundClick, isLarge } = useAppContext();
    const [expandStates, clippedIndexes, setExpandStates, setRef] = useLogsUpdate(update, styles.element__text_clip);

    const detail = (index: number): void => {
        setExpandStates((prevStates) => {
            const newStates: boolean[] = [...prevStates];
            newStates[index] = !prevStates[index];
            return newStates;
        });
        handleSoundClick();
    };

    return (
        <div className={styles.update}>
            {update.map((element, index) => {
                const isClipped: boolean = clippedIndexes.includes(index);

                return (
                    <div className={styles.element} key={nanoid()}>
                        <div className={styles.border}></div>
                        <h2 className={styles.element__title}>{element.title}</h2>
                        <p
                            className={`${styles.element__text} ${expandStates[index] ? '' : styles.element__text_clip}`}
                            ref={(item) => setRef(item, index)}
                        >
                            {element.text}
                        </p>

                        {isLarge ? (
                            isClipped ? (
                                <button className={styles.element__expend} type="button" onClick={() => detail(index)}>
                                    {expandStates[index] ? '-collapse' : '+expand'}
                                </button>
                            ) : null
                        ) : (
                            <button
                                className={`${styles.element__expend} ${isClipped ? null : styles.element__expend_deactive}`}
                                onClick={isClipped ? () => detail(index) : undefined}
                                type="button"
                            >
                                {expandStates[index] ? '-collapse' : '+expand'}
                            </button>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export { LogsUpdate };
