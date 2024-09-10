import React from 'react';
import styles from './LogsUpdate.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { mediaQuerySelector } from '../../store/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { soundsClickTrigger } from '../../store/slices/soundsSlice';
import { useLogsUpdate } from '../../hooks/useLogsUpdate';
import type { AppDispatch } from '../../store/store';

const update: Record<string, string>[] = [
    {
        title: 'project update',
        text: 'I continue to actively work on improving the quality of the application. I am constantly working to improve the readability, structure and performance of the code.',
    },
    {
        title: 'Challenges',
        text: 'Maximum test coverage of the application, as well as integration of Next.js, Three.js.',
    },
    {
        title: 'Next steps',
        text: 'Creation of 3D animation and mini-games. Adding more flexible settings. Creating and adding pet projects that will tell about my skills.',
    },
    {
        title: 'Conclusion',
        text: 'In conclusion, i would like to say that my project represents my passion and diligence. I am excited to see the impact it will have and am committed to continuing to strive for excellence.',
    },
];

const LogsUpdate = (): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();

    const { isMedium } = useSelector(mediaQuerySelector);
    const [expandStates, clippedIndexes, setExpandStates, setRef] =
        useLogsUpdate(update, styles.element__text_clip);

    const detail = (index: number): void => {
        setExpandStates((prevStates) => {
            const newStates: boolean[] = [...prevStates];
            newStates[index] = !prevStates[index];
            return newStates;
        });
        dispatch(soundsClickTrigger());
    };

    return (
        <section className={styles.update}>
            {update.map((element, index) => {
                const isClipped: boolean = clippedIndexes.includes(index);

                return (
                    <article className={styles.element} key={nanoid()}>
                        <div className={styles.border}></div>
                        <h3 className={styles.element__title}>
                            {element.title}
                        </h3>
                        <p
                            className={`${styles.element__text} ${expandStates[index] ? '' : styles.element__text_clip}`}
                            ref={(item) => setRef(item, index)}
                        >
                            {element.text}
                        </p>

                        {isMedium ? (
                            isClipped ? (
                                <button
                                    className={styles.element__expend}
                                    type="button"
                                    onClick={() => detail(index)}
                                >
                                    {expandStates[index]
                                        ? '-collapse'
                                        : '+expand'}
                                </button>
                            ) : null
                        ) : (
                            <button
                                className={`${styles.element__expend} ${isClipped ? null : styles.element__expend_deactive}`}
                                onClick={
                                    isClipped ? () => detail(index) : undefined
                                }
                                type="button"
                            >
                                {expandStates[index] ? '-collapse' : '+expand'}
                            </button>
                        )}
                    </article>
                );
            })}
        </section>
    );
};

export { LogsUpdate };
