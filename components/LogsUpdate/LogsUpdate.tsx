'use client';

import React from 'react';
import useLogsUpdate from '@/hooks/useLogsUpdate';
import styles from '@/styles/components/logsUpdate/LogsUpdate.module.scss';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { mediaQuerySelector } from '@/redux/selectors';
import { soundsClickTrigger } from '@/redux/slice/soundsSlice';
import type { UpdateItem } from '@/interface/logs/Logs.interface';
import type { AppDispatch } from '@/redux/store';

export default function LogsUpdate({ update }: { update: UpdateItem[] }): React.JSX.Element {
    const dispatch = useDispatch<AppDispatch>();

    const isMedium = useSelector(mediaQuerySelector).isMedium;
    const [expandStates, clippedIndexes, setExpandStates, setRef] = useLogsUpdate(update, styles.element__text_clip);

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
                        <h3 className={styles.element__title}>{element.title}</h3>
                        <p
                            className={`${styles.element__text} ${expandStates[index] ? '' : styles.element__text_clip}`}
                            ref={(item) => setRef(item, index)}
                        >
                            {element.text}
                        </p>

                        {isMedium ? (
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
                    </article>
                );
            })}
        </section>
    );
}
