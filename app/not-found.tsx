'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/errorApp/ErrorApp.module.scss';
import { useDispatch } from 'react-redux';
import { soundsClickTrigger } from '@/redux/slice/soundsSlice';
import type { AppDispatch } from '@/redux/store';

export default function NotFound(): React.JSX.Element {
    const dispatch = useDispatch<AppDispatch>();

    const toTheHome = (): void => {
        dispatch(soundsClickTrigger());
    };

    return (
        <section className={styles.error} data-text={'404'} data-error="true">
            <h2 className={`${styles.error__title} ${styles.glitch}`} data-text={'404'}>
                {'404'}
            </h2>
            <p className={`${styles.error__description} ${styles.glitch}`} data-text={'page not found'}>
                {'page not found'}
            </p>
            <Link className={styles.error__link} href={'/beginning'} onClick={toTheHome}>
                return home
                <span className={`${styles.error__link_line} ${styles.top_left}`}></span>
                <span className={`${styles.error__link_line} ${styles.top_right}`}></span>
                <span className={`${styles.error__link_line} ${styles.bottom_left}`}></span>
                <span className={`${styles.error__link_line} ${styles.bottom_right}`}></span>
                <span className={styles.slick}></span>
            </Link>
        </section>
    );
}
