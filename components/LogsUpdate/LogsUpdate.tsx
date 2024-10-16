'use client';

import React from 'react';
import useLogsUpdate from '@/hooks/useLogsUpdate';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { mediaQuerySelector } from '@/redux/selectors';
import { soundsClickTrigger } from '@/redux/slice/soundsSlice';
import type { UpdateItem } from '@/interface/logs/Logs.interface';
import type { AppDispatch } from '@/redux/store';

export default function LogsUpdate({ update }: { update: UpdateItem[] }): React.JSX.Element {
    const dispatch = useDispatch<AppDispatch>();

    const isMedium = useSelector(mediaQuerySelector).isMedium;
    const [expandStates, clippedIndexes, setExpandStates, setRef] = useLogsUpdate(
        update,
        'logs_update__element_text_clip',
    );

    const detail = (index: number): void => {
        setExpandStates((prevStates) => {
            const newStates: boolean[] = [...prevStates];
            newStates[index] = !prevStates[index];
            return newStates;
        });
        dispatch(soundsClickTrigger());
    };

    return (
        <section className={'logs_update'}>
            {update.map((element, index) => {
                const isClipped: boolean = clippedIndexes.includes(index);

                return (
                    <article className={'logs_update__element'} key={nanoid()}>
                        <h3 className={'logs_update__element_title'}>{element.title}</h3>
                        <p
                            className={`logs_update__element_text ${expandStates[index] ? '' : 'logs_update__element_text_clip'}`}
                            ref={(item) => setRef(item, index)}
                        >
                            {element.text}
                        </p>

                        {isMedium ? (
                            isClipped ? (
                                <button
                                    className={'logs_update__element_expend'}
                                    type="button"
                                    onClick={() => detail(index)}
                                >
                                    {expandStates[index] ? '-collapse' : '+expand'}
                                </button>
                            ) : null
                        ) : (
                            <button
                                className={`logs_update__element_expend ${isClipped ? null : 'logs_update__element_expend_deactive'}`}
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
