'use client';

import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { soundsClickTrigger } from '@/redux/slice/soundsSlice';
import type { AppDispatch } from '@/redux/store';

export default function NotFound(): React.JSX.Element {
    const dispatch = useDispatch<AppDispatch>();

    const toTheHome = (): void => {
        dispatch(soundsClickTrigger());
    };

    return (
        <section className={'error'} data-text={'404'} data-error="true">
            <h2 className={`${'error__title'} ${'error__glitch'}`} data-text={'404'}>
                {'404'}
            </h2>
            <p className={`${'error__description'} ${'error__glitch'}`} data-text={'page not found'}>
                {'page not found'}
            </p>
            <Link className={'error__link'} href={'/beginning'} onClick={toTheHome}>
                return home
                <span className={'error__link_line error__top_left'}></span>
                <span className={'error__link_line error__top_right'}></span>
                <span className={'error__link_line error__bottom_left'}></span>
                <span className={'error__link_line error__bottom_right'}></span>
                <span className={'error__slick'}></span>
            </Link>
        </section>
    );
}
