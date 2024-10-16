'use client';

import React from 'react';
import Link from 'next/link';
import useModal from '@/hooks/useModal';
import { Hexagon } from '../svgIcon/SvgIcon';
import { nanoid } from '@reduxjs/toolkit';
import { soundsClickTrigger } from '@/redux/slice/soundsSlice';
import { useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';
import type { AppDispatch } from '@/redux/store';
import type { NavigationProps } from '@/interface/navigation/Navigation.interface';
import type { Page } from '@/interface/interface';

export default function Navigation(props: NavigationProps): React.JSX.Element {
    const dispatch: AppDispatch = useDispatch();
    const pathname: string = usePathname();
    const closeNavigationMobile = useModal('navigationMobile').close;

    const handleClick = (isActive: boolean): void => {
        if (!isActive) {
            dispatch(soundsClickTrigger());
            closeNavigationMobile();
        }
    };

    return (
        <nav className={'navigation'}>
            {Object.entries(props.locations).map(([pageName, url]) => {
                const isActive: boolean = pathname.includes(url);

                return (
                    <article
                        className={isActive ? 'navigation__item_active navigation__item' : 'navigation__item'}
                        key={nanoid()}
                    >
                        <h4 className={'navigation__item_title'}>
                            {pageName as Page}
                            <Hexagon />
                        </h4>
                        <p className={'navigation__item_text'}>
                            Suscipit est consequatur nemo voluptatem est labore saepe.
                        </p>
                        <Link
                            href={url}
                            className={'navigation__item_link'}
                            onClick={() => handleClick(isActive)}
                            scroll={false}
                        />
                    </article>
                );
            })}
        </nav>
    );
}
