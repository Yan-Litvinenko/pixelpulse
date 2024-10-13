'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/errorApp/ErrorApp.module.scss';
import { soundsClickTrigger } from '@/redux/slice/soundsSlice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/redux/store';

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}): React.JSX.Element {
    const dispatch = useDispatch<AppDispatch>();
    const toTheHome = (): void => {
        dispatch(soundsClickTrigger());
        reset();
    };

    return (
        <>
            <section className={styles.error} data-text={error.name} data-error="true">
                <h2 className={`${styles.error__title} ${styles.glitch}`} data-text={error.name}>
                    {error.name}
                </h2>
                <p className={`${styles.error__description} ${styles.glitch}`} data-text={'an unknown error occurred'}>
                    {'an unknown error occurred'}
                </p>
                <Link className={styles.error__link} href="/beginning" onClick={toTheHome}>
                    return home
                    <span className={`${styles.error__link_line} ${styles.top_left}`}></span>
                    <span className={`${styles.error__link_line} ${styles.top_right}`}></span>
                    <span className={`${styles.error__link_line} ${styles.bottom_left}`}></span>
                    <span className={`${styles.error__link_line} ${styles.bottom_right}`}></span>
                    <span className={styles.slick}></span>
                </Link>
            </section>
        </>
    );
}
