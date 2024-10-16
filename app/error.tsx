'use client';

import React from 'react';
import Link from 'next/link';
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
            <section className={'error'} data-text={error.name} data-error="true">
                <h2 className={'error__title error__glitch'} data-text={error.name}>
                    {error.name}
                </h2>
                <p className={'error__description error__glitch'} data-text={'an unknown error occurred'}>
                    {'an unknown error occurred'}
                </p>
                <Link className={'error__link'} href="/beginning" onClick={toTheHome}>
                    return home
                    <span className={'error__link_line error__top_left'}></span>
                    <span className={'error__link_line styles.error__top_right'}></span>
                    <span className={'error__link_line styles.error__bottom_left'}></span>
                    <span className={'error__link_line styles.error__bottom_right'}></span>
                    <span className={'error__slick'}></span>
                </Link>
            </section>
        </>
    );
}
